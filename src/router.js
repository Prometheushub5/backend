import {Router} from 'express';
import ControleCliente from './app/controllers/ControleCliente';
import ControleConsultor from './app/controllers/ControleConsultor';
import ControleCurso from './app/controllers/ControleCurso';
import Database from './database';


Database.init();
const routes = new Router();

routes.post('/cursos',ControleCurso.store); 


routes.post('/clientes',ControleCliente.store);


routes.post('/consultores', ControleConsultor.store);

export default routes;