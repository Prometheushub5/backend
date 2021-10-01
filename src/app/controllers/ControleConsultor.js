import Consultores from "../models/Consultores";
import * as Yup from 'yup';

class ControleConsultor{
    async criar(req,res){
      const modelo = Yup.object().shape({
        nome: Yup.string().require(),
        email: Yup.string().email().require(),
        whats: Yup.string().require(),
        senha: Yup.string().require()
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
            'senhaAntiga', (senhaAntiga, entrada) => senhaAntiga ? entrada.require() : entrada
          ),
          senhaConfirma: Yup.string().when(
            'senha', (senha, entrada) => senha ? entrada.require().oneOf([Yup.ref('senha')]) : entrada)
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
}

export default new ControleConsultor();