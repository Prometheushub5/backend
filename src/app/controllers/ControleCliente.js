import Clientes from "../models/Clientes";

class ControleCliente{
    async store(req,res){
        const clienteExiste = await Clientes.findOne({

            where: {email: req.body.email},
            where:{cpf: req.body.cpf}
        })
        if (clienteExiste){
            return res.status(400).json({
                error: 'Cliente já cadastrado'
            })
        }
        const cliente = await Clientes.create(req.body);
        return res.json(cliente);
    }

}

export default new ControleCliente();