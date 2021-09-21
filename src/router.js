import {Router} from 'express';
import ControleCliente from './app/controllers/ControleCliente';
import ControleConsultor from './app/controllers/ControleConsultor';
import ControleCurso from './app/controllers/ControleCurso';
import ControleSessao from './app/controllers/ControleSessao';
import Porteiro from './app/middeware/auth';
// import Database from './database';


// Database.init();
const routes = new Router();
routes.post('/clientes',ControleCliente.store); //criar clientes
routes.get('/cursos',ControleCurso.index); //listar cursos
routes.post('/login', ControleSessao.store); //login
routes.use(Porteiro) //apartir daqui somente logado
routes.post('/cursos',ControleCurso.store); //criar cursos
routes.post('/consultores', ControleConsultor.store); //criar consultores
routes.get('/clientes',ControleCliente.index) //listar clientes



export default routes;