import {Router} from 'express';
import ClienteControle from './app/controllers/ClienteControle';
import ConsultorControle from './app/controllers/ConsultorControle';
import CursoControle from './app/controllers/CursoControle';
import Database from './database';


Database.init();
const routes = new Router();
//rotas cursos
routes.post('/cursos',CursoControle.store); 

//rotas clientes
routes.post('/clientes',ClienteControle.store);

//rotas consultores
routes.post('/consultores', ConsultorControle.store);

export default routes;//teste commit