import Clientes from '../models/Clientes';
import {Op} from 'sequelize';
class ControleCliente{
    async store(req,res){
        const ExisteCliente = await Clientes.findOne({
            where: {
                [Op.or]: [
                    {email: req.body.email},
                    {cpf: req.body.cpf}
                  ]}
        })
        if (ExisteCliente){
            return res.status(400).json({
                error: 'Cliente já cadastrado'
            })
        }
        const cliente = await Clientes.create(req.body);
        return res.json(cliente);
    }

}

export default new ControleCliente();