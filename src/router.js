import {Router} from 'express';
import ControleCliente from './app/controllers/ControleCliente';
import ControleConsultor from './app/controllers/ControleConsultor';
import ControleCurso from './app/controllers/ControleCurso';
import ControleSessao from './app/controllers/ControleSessao';
import Porteiro from './app/middeware/auth';

const rotas = new Router();
rotas.post('/v1.0/clientes',ControleCliente.criar); //criar clientes
rotas.get('/v1.0/cursos',ControleCurso.listar); //listar cursos
rotas.get('/v1.0/cursos/:id',ControleCurso.listar); //listar curso
rotas.post('/auth', ControleSessao.verificar); //login
rotas.use(Porteiro) //apartir daqui somente logado
rotas.post('/v1.0/cursos',ControleCurso.criar); //criar cursos
rotas.put('/v1.0/cursos/:id',ControleCurso.update); //update cursos
rotas.post('/v1.0/consultores', ControleConsultor.criar); //criar consultores
rotas.put('/v1.0/consutores',ControleConsultor.update); //update de senha e/ou email de consultor
rotas.get('/v1.0/clientes',ControleCliente.listar); //LISTA CLIENTES POR ID, STATUS OU TODOS
rotas.put('/v1.0/clientes',ControleCliente.atendimento) // fila



export default rotas;