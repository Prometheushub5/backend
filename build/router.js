"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ControleCliente = require('./app/controllers/ControleCliente'); var _ControleCliente2 = _interopRequireDefault(_ControleCliente);
var _ControleConsultor = require('./app/controllers/ControleConsultor'); var _ControleConsultor2 = _interopRequireDefault(_ControleConsultor);
var _ControleCurso = require('./app/controllers/ControleCurso'); var _ControleCurso2 = _interopRequireDefault(_ControleCurso);
var _ControleSessao = require('./app/controllers/ControleSessao'); var _ControleSessao2 = _interopRequireDefault(_ControleSessao);
var _auth = require('./app/middeware/auth'); var _auth2 = _interopRequireDefault(_auth);

const rotas = new (0, _express.Router)();
rotas.post('/v1.0/clientes/criar/',_ControleCliente2.default.criar); //criar clientes
rotas.get('/v1.0/cursos/consulta/',_ControleCurso2.default.listar); //listar cursos
rotas.post('/login', _ControleSessao2.default.verificar); //login
rotas.use(_auth2.default) //apartir daqui somente logado
rotas.post('/v1.0/cursos/criar/',_ControleCurso2.default.criar); //criar cursos
rotas.put('/v1.0/cursos/update/',_ControleCurso2.default.update); //update cursos
rotas.post('/v1.0/consultores/criar/', _ControleConsultor2.default.criar); //criar consultores
rotas.put('/v1.0/consutores/update/',_ControleConsultor2.default.update); //update de senha e/ou email de consultor
rotas.get('/v1.0/clientes/consulta/',_ControleCliente2.default.listar); //LISTA CLIENTES POR ID, STATUS OU TODOS
rotas.put('/v1.0/clientes/atendimento/',_ControleCliente2.default.atendimento)



exports. default = rotas;