import Clientes from "../models/Clientes";

class ClienteControle{
    async store(req,res){
        const curso = await Clientes.create(req.body);
        return res.json(curso);
    }

}

export default new ClienteControle();