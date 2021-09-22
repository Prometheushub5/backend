import Clientes from "../models/Clientes";
import Cursos from "../models/Cursos";

class ControleCurso{
    async criar(req,res){
        const curso = await Cursos.create (req.body);
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
}


export default new ControleCurso();