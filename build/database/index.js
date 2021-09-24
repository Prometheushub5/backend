"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Clientes = require('../app/models/Clientes'); var _Clientes2 = _interopRequireDefault(_Clientes);
var _Consultores = require('../app/models/Consultores'); var _Consultores2 = _interopRequireDefault(_Consultores);
var _Cursos = require('../app/models/Cursos'); var _Cursos2 = _interopRequireDefault(_Cursos);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [_Cursos2.default, _Consultores2.default, _Clientes2.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new (0, _sequelize.Sequelize)(_database2.default);

    models
      .map(model => model.init(this.connection))
  }
}  
exports. default = new Database();