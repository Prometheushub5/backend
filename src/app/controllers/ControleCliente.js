import Clientes from '../models/Clientes'
import {Op} from 'sequelize';
class ControleCliente{
    async criar(req,res){
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
    async lista(req, res){
        const {id} = req.query
        if(id){ 
            const cliente = await Clientes.findOne({
            where: {id:id}
        });
        if(cliente){
            return res.status(200).json({cliente: cliente});
        }
        return res.status(400).json({
            error: 'Id não existe'});
    }
        const {page = 1} = req.query;
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