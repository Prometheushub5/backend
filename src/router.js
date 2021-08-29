import {Router} from 'express';
import Cursos from './app/models/Cursos';
import Database from './database';


const routes = new Router();

routes.get('/',(res,req)=>{
    return res.json({mensagem:'Index'})
})
// routes.get('/', async(req,res)=>{

//     const curso = await Cursos.create({
//         nome: 'curso teste 03',
//         nivel_ensino: 'GRADUAÇÃO',
//         modalidade: 'PRESENCIAL',
//         unidade: 'Unidade teste 02',
//         grau_academico: 'LICENCIATURA'
//     });
//     return res.json(curso)
// }); //apenas para testar a criação de cursos
export default routes;