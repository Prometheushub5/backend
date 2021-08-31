import {Router} from 'express';
import ClientesControle from './app/controllers/ClientesControle';
import CursoControle from './app/controllers/CursoControle';
import Database from './database';


Database.init();
const routes = new Router();

routes.post('/cursos',CursoControle.store); //primeira rota criaçao dos cursos
routes.post('/clientes',ClientesControle.store);


export default routes;//teste commit