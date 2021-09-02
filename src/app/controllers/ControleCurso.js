import Cursos from "../models/Cursos";

class ControleCurso{
    async store(req,res){
        const curso = await Cursos.create (req.body);
        return res.json(curso);
    }

}


export default new ControleCurso();