import Clientes from "../models/Clientes";

class ClientesControle{
    async store(req,res){
        const curso = await Clientes.create(req.body);
        return res.json(curso);
    }

}

export default new ClientesControle();