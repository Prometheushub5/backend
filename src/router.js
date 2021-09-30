import {Router} from 'express';
import ControleCliente from './app/controllers/ControleCliente';
import ControleConsultor from './app/controllers/ControleConsultor';
import ControleCurso from './app/controllers/ControleCurso';
import ControleSessao from './app/controllers/ControleSessao';
import Porteiro from './app/middeware/auth';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const rotas = new Router();

rotas.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

rotas.post('/v1.0/clientes',ControleCliente.criar); //criar clientes
rotas.get('/v1.0/cursos',ControleCurso.listar); //listar cursos
rotas.get('/v1.0/cursos/:id',ControleCurso.listar); //listar curso
rotas.post('/v1.0/auth', ControleSessao.verificar); //login
rotas.use(Porteiro) //apartir daqui somente logado
rotas.post('/v1.0/cursos',ControleCurso.criar); //criar cursos
rotas.put('/v1.0/cursos/:id',ControleCurso.update); //update cursos
rotas.delete('/v1.0/cursos/:id',ControleCurso.delete);
rotas.post('/v1.0/consultores', ControleConsultor.criar); //criar consultores
rotas.put('/v1.0/consutores',ControleConsultor.update); ///update de senha e/ou email de consultor
rotas.delete('/v1.0/consultores/:id',ControleConsultor.delete);
rotas.get('/v1.0/clientes',ControleCliente.listar);
rotas.get('/v1.0/clientes/:id',ControleCliente.listar);
rotas.put('/v1.0/clientes/:id',ControleCliente.atendimento);
rotas.delete('/v1.0/clientes/:id',ControleCliente.delete)

export default rotas;