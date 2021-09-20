import {Router} from 'express';
import ControleCliente from './app/controllers/ControleCliente';
import ControleConsultor from './app/controllers/ControleConsultor';
import ControleCurso from './app/controllers/ControleCurso';
import ControleSessao from './app/controllers/ControleSessao';
import Porteiro from './app/middeware/auth';
// import Database from './database';


// Database.init();
const routes = new Router();
routes.post('/clientes',ControleCliente.store);
routes.post('/cursos',ControleCurso.store); 
routes.post('/login', ControleSessao.store)
routes.use(Porteiro)

routes.post('/consultores', ControleConsultor.store);


routes.get('/cursos',ControleCurso.index); 

export default routes;