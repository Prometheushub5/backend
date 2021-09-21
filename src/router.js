import {Router} from 'express';
import ControleCliente from './app/controllers/ControleCliente';
import ControleConsultor from './app/controllers/ControleConsultor';
import ControleCurso from './app/controllers/ControleCurso';
import ControleSessao from './app/controllers/ControleSessao';
import Porteiro from './app/middeware/auth';

const rotas = new Router();
rotas.post('/v1.0/clientes/criar/',ControleCliente.criar); //criar clientes
rotas.get('/v1.0/cursos/consulta/',ControleCurso.lista); //listar cursos
rotas.post('/login', ControleSessao.verificar); //login
rotas.use(Porteiro) //apartir daqui somente logado
rotas.post('/v1.0/cursos/criar',ControleCurso.criar); //criar cursos
rotas.post('/v1.0/consultores/criar', ControleConsultor.criar); //criar consultores
rotas.get('/v1.0/clientes/consulta/',ControleCliente.lista) //listar clientes



export default rotas;