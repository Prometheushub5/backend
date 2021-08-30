import {Router} from 'express';
import Clientes from './app/models/Clientes';
import Consultores from './app/models/Consultores';
import Cursos from './app/models/Cursos';
import Database from './database';


Database.init();
const routes = new Router();

// routes.get('/',(res,req)=>{
//     return res.json({mensagem:'Index'})
// })
routes.get('/', async(req,res)=>{

    const cliente = await Clientes.create({
        nome: 'CLIENTE 02',
        cpf: 'CPF',
        cep: 'CEP',
        logradouro: 'LOGRADOURO',
        numero: 'numero',
        bairro: 'bairro',
        cidade: 'CIDADE',
        uf: 'UF',
        email: 'EMAIL3@.COM',
        telefone: 'telefone',
        whats: '43999999999',
        curso_id: '2'
    });
    return res.json(cliente)
}); //apenas para testar a criação de cliente
export default routes;