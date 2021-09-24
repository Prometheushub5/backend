"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _Consultores = require('../models/Consultores'); var _Consultores2 = _interopRequireDefault(_Consultores);
var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class ControleSessao{
  async verificar(req, res){
    const { email, senha } = req.body;

    const consultor = await _Consultores2.default.findOne({ where: { email }});

    if (!consultor){
      return res.status(401).json({ Mensagem: 'Usuário não encontrado' });
    }

    if (!(await consultor.checkPassword(senha))){
      return res.status(401).json({ Mensagem: 'Senha inválida'})
    }

    const { id, nome, whats } = consultor;

    res.json({ 
      consultor: {
        id,
        nome,
        email,
        whats,
      },
      token: _jsonwebtoken2.default.sign({ id, nome, email }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      })
    })
  }
}

exports. default = new ControleSessao();