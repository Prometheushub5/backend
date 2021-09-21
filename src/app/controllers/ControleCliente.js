import Clientes from '../models/Clientes'
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
    async index(req, res){
        const {page} = req.query;

        const clientes = await Clientes.findAll({
            order : ['updated_at'],
            attributes: ['id','nome','status'],
            limit: 3,
            offset: (page -1) * 3,

        });
        return res.status(200).json({register: page, clientes: clientes});
    }
}

export default new ControleCliente();