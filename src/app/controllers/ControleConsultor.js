import Consultores from "../models/Consultores";
import * as Yup from 'yup';

class ControleConsultor{
    async criar(req,res){
      const modelo = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        whats: Yup.string().required(),
        senha: Yup.string().required()
      })
      if (!(await modelo.isValid(req.body))){
        return res.status(400).json({Mensagem:"Solicitação inválida."})
      }
        const ExisteConsultor = await Consultores.findOne({
            where: {email:req.body.email}
        })
        if (ExisteConsultor){
            return res.status(422).json({
                error: 'Consultor já cadastrado'
            })
        }
        const consultor = await Consultores.create(req.body);
        return res.status(200).json({Mensagem: "Consultor Criado"});
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
          return res.status(400).json({Mensagem:"Solicitação inválida."})
        }
        const { email, senhaAntiga } = await req.body;
    
        const consultor = await Consultores.findByPk(req.consultorID);
    
        if ( email && email !== consultor.email){
          const existeConsultor = await Consultores.findOne({ where: { email }})
          if(existeConsultor){
            return res.status(422).json({ mensagem: 'Esse email já esta em uso!'})
          }
        }
    
        if( senhaAntiga && !(await consultor.checkPassword(senhaAntiga))) {
          return res.status(401).json({ Mensagem: 'A senha não confere'})
        }
        const { id, nome } = await consultor.update(req.body);
    
        return res.status(200).json({
          id,
          nome,
        });
      }
    async delete(req, res){
        const {id} = req.params
        const consultor = await Consultores.findByPk(id);   
        if (consultor){
          const del = await curso.destroy(cliente);
            return res.status(200).json({Mensagem: 'Excluido!'})
          }
          return res.status(404).json({ Mensagem: 'ID não existe'})
    }
    async listar(req, res){
      const {id} = req.params
      if(id){ 
          const consultor = await Consultores.findOne({
          where: {id:id}
      });
      if(consultor){
          return res.status(200).json({consultor: consultor});
      }
      return res.status(400).json({
          Mensagem:"Solicitação inválida."});
  }
  const modelo = Yup.object().shape({
      limit: Yup.number(),
      page: Yup.number()
    })
    if (!(await modelo.isValid(req.query))){
      return res.status(400).json({Mensagem:"Solicitação inválida."})
    }
      const { limit=1, page = 1,} = req.query;
      const consultor = await Consultores.findAll({
          order : ['updated_at'],
          attributes: ['id','nome', 'email'],
          limit: limit,
          offset: (page -1) * limit,

      });
      return res.status(200).json({pagina: page, consultor: consultor});
  }
}

export default new ControleConsultor();