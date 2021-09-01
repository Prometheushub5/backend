import Consultores from "../models/Consultores";

class ConsultorControle{
    async store(req,res){
        const consultorExiste = await Consultores.findOne({
            where: {email:req.body.email}
        })
        if (consultorExiste){
            return res.status(400).json({
                error: 'Consultor já cadastrado'
            })
        }
        const consultor = await Consultores.create(req.body);
        return res.json(consultor);
    }

}

export default new ConsultorControle();