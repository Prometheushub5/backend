import {Router} from 'express';
import Consultores from './app/models/Consultores';
import Cursos from './app/models/Cursos';
import Database from './database';


Database.init();
const routes = new Router();

// routes.get('/',(res,req)=>{
//     return res.json({mensagem:'Index'})
// })
routes.get('/', async(req,res)=>{

    const consultor = await Consultores.create({
        nome: 'Consultor 01',
        email: 'consultor@consultoria.com',
        senha: 'senha',
        whats: '43999999999'
    });
    return res.json(consultor)
}); //apenas para testar a criação de consultor
export default routes;