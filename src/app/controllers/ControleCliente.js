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
    async listar(req, res){
        const {id, status, page = 1} = req.query
        const valores=[            
            'NOVO',
            'EM_ATENDIMENTO',
            'CONTRATADO',
            'DESISTENTE'
          ];
          if (id && status){
            return res.status(400).json({
                erro: 'Id não pode ser ususado em conjunto com status'});
          };
        if(id){ 
            const cliente = await Clientes.findOne({
            where: {id:id}
        });
        if(cliente){
            return res.status(200).json({cliente: cliente});
        }
        return res.status(400).json({
            error: 'id invalido'});
    }
        if(status){
            if(valores.indexOf(status) > -1){
                const clientes = await Clientes.findAll({
                    where: {status: status},
                    order : ['updated_at'],
                    attributes: ['id','nome',['updated_at', 'atualizado']],
                    limit: 3,
                    offset: (page -1) * 3
                })
                return res.status(200).json({status : status, pagina: page, clientes: clientes})
                
            }
            return res.status(400).json({
                    error: 'status invalido'});
        }

        const clientes = await Clientes.findAll({
            order : ['updated_at'],
            attributes: ['id','nome','status'],
            limit: 3,
            offset: (page -1) * 3,

        });
        return res.status(200).json({pagina: page, clientes: clientes});
    }
    async atendimento(req, res){
        
    }
}

export default new ControleCliente();