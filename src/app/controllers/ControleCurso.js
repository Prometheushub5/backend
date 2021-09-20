import Clientes from "../models/Clientes";
import Cursos from "../models/Cursos";

class ControleCurso{
    async store(req,res){
        const curso = await Cursos.create (req.body);
        return res.json(curso);
    }
    async index(req, res) {
    const { page } = req.query;

    const cursos = await Cursos.findAll({
      order: ['id'],
      attributes: ['id','nome', 'nivel_ensino', 'grau_academico', 'modalidade','unidade', 'created_at'],
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

    return res.status(200).json({ register: page,
      cursos: cursos
    });
  }
}


export default new ControleCurso();