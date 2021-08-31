import Cursos from "../models/Cursos";

class CursoController{
    async store(req,res){
        const curso = await Cursos.create (req.body)
        return res.json(curso);
    }

}


export default new CursoController();