import Consultores from "../models/Consultores";

class ConsultorControle{
    async store(req,res){
        const consultor = await Consultores.create(req.body);
        return res.json(consultor);
    }

}

export default new ConsultorControle();