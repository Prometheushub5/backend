"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Consultores = require('../models/Consultores'); var _Consultores2 = _interopRequireDefault(_Consultores);
var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

class ControleConsultor{
    async criar(req,res){
        const ExisteConsultor = await _Consultores2.default.findOne({
            where: {email:req.body.email}
        })
        if (ExisteConsultor){
            return res.status(400).json({
                error: 'Consultor já cadastrado'
            })
        }
        const consultor = await _Consultores2.default.create(req.body);
        return res.json(consultor);
    }
    async update(req, res) {

        const modelo = Yup.object().shape({
          email: Yup.string().email(),
          senhaAntiga: Yup.string(),
          senha: Yup.string().when(
            'senhaAntiga', (senhaAntiga, entrada) => senhaAntiga ? entrada.required() : entrada
          ),
          senhaConfirma: Yup.string().when(
            'senha', (senha, entrada) => senha ? entrada.required().oneOf([Yup.ref('senha')]) : entrada)
        });
    
        if (!(await modelo.isValid(req.body))){
          return res.status(400).json({ Mensagem: 'Falta de dados', Mensagem2: 'email;senhaAntiga;senha;senhaConfirma'})
        }
        const { email, senhaAntiga } = await req.body;
    
        const consultor = await _Consultores2.default.findByPk(req.consultorID);
    
        if ( email && email !== consultor.email){
          const existeConsultor = await _Consultores2.default.findOne({ where: { email }})
          if(existeConsultor){
            return res.status(400).json({ mensagem: 'Esse email já esta em uso!'})
          }
        }
    
        if( senhaAntiga && !(await consultor.checkPassword(senhaAntiga))) {
          return res.status(400).json({ Mensagem: 'A senha não confere'})
        }
        const { id, nome } = await consultor.update(req.body);
    
        return res.status(200).json({
          id,
          nome,
        });
      }
}

exports. default = new ControleConsultor();