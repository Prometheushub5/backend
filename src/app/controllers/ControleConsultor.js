import Consultores from "../models/Consultores";

class ControleConsultor{
    async store(req,res){
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

}

export default new ControleConsultor();