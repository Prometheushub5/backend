import Consultores from "../models/Consultores";
import * as Yup from 'yup';

class ControleConsultor{
    async criar(req,res){
        const ExisteConsultor = await Consultores.findOne({
            where: {email:req.body.email}
        })
        if (ExisteConsultor){
            return res.status(400).json({
                error: 'Consultor já cadastrado'
            })
        }
        const consultor = await Consultores.create(req.body);
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
    
        const consultor = await Consultores.findByPk(req.consultorID);
    
        if ( email && email !== consultor.email){
          const existeConsultor = await Consultores.findOne({ where: { email }})
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

export default new ControleConsultor();