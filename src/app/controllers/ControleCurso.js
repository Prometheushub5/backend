import Clientes from "../models/Clientes";
import Cursos from "../models/Cursos";
import * as Yup from 'yup';

class ControleCurso{
    async criar(req,res){
      const modelo = Yup.object().shape({
        nome: Yup.string().required(),
        nivel_ensino:Yup.string().oneOf([
            'LATO SENSU',
            'FORMAÇÃO COMPLEMENTAR',
            'GRADUAÇÃO',
            'DOUTORADO',
            'TÉCNICO',
            'RESIDÊNCIA',
            'MESTRADO',
            'FUNDAMENTAL',
            'TÉCNICO INTEGRADO',
            'MÉDIO',
            'INFANTIL'
            ]),
        grau_academico:Yup.string().oneOf([
            'BACHARELADO',
            'LICENCIATURA',
            'TECNOLÓGICO'
          ]),
        modalidade:Yup.string().oneOf([
            'PRESENCIAL',
            'SEMI-PRESENCIAL',
            'REMOTO']).required(),
        unidade: Yup.string().required()
        });
        if (!(await modelo.isValid(req.body))){
          return res.status(400).json({ Mensagem: 'Entrada não permitida'})
        }
        const novocurso = Object.assign({}, req.body);
        novocurso.consultor_id = req.consultorID;
        const curso = await Cursos.create (novocurso);
        return res.json(curso);
    }
    async listar(req, res) {
      const {id} = req.query
      if(id){ 
          const curso = await Cursos.findOne({
          where: {id:id}
      });
      if(curso){
          return res.status(200).json({curso: curso});
      }
      return res.status(400).json({
        error: 'id invalido'});
    }
      const { page = 1 } = req.query;

      const cursos = await Cursos.findAll({
        order: ['id'],
        attributes: ['id','nome', 'nivel_ensino'],
        limit: 3,
        offset: (page -1) * 3,
    //   include: [
    //     {
    //       model: Clientes,
    //       as: 'clientes',
    //       attributes: ['id', 'nome'],
    //     }
    //   ]
      })

      return res.status(200).json({ pagina: page,
        cursos: cursos
      });
   }
   async update(req, res) {
    const modelo = Yup.object().shape({
      id: Yup.number().required(),
      nome: Yup.string(),
      nivel_ensino:Yup.string().oneOf([
          'LATO SENSU',
          'FORMAÇÃO COMPLEMENTAR',
          'GRADUAÇÃO',
          'DOUTORADO',
          'TÉCNICO',
          'RESIDÊNCIA',
          'MESTRADO',
          'FUNDAMENTAL',
          'TÉCNICO INTEGRADO',
          'MÉDIO',
          'INFANTIL'
          ]),
      grau_academico:Yup.string().oneOf([
          'BACHARELADO',
          'LICENCIATURA',
          'TECNOLÓGICO'
        ]),
      modalidade:Yup.string().oneOf([
          'PRESENCIAL',
          'SEMI-PRESENCIAL',
          'REMOTO']),
      unidade: Yup.string()
      });

    if (!(await modelo.isValid(req.body))){
      return res.status(400).json({ Mensagem: 'Entrada não permitida'})
    }

    const curso = await Cursos.findByPk(req.body.id);

    if (curso){
      const atualizacao = Object.assign({}, req.body);
      atualizacao.consultor_id = req.consultorID;
      const curso_atualizado = await curso.update(atualizacao);
        return res.status(200).json(curso_atualizado)
      }
      return res.status(400).json({ Mensagem: 'ID não existe'})

  }
}


export default new ControleCurso();