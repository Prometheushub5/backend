"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _router = require('./router'); var _router2 = _interopRequireDefault(_router);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _compression = require('compression'); var _compression2 = _interopRequireDefault(_compression);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swagger_outputjson = require('./swagger_output.json'); var _swagger_outputjson2 = _interopRequireDefault(_swagger_outputjson);
require('./database');




class App{
    constructor(){
        this.server = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(_express2.default.json());
        this.server.use(_compression2.default.call(void 0, ));
        this.server.use(_cors2.default.call(void 0, ))
        this.server.use('/doc', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swagger_outputjson2.default))
    }

    routes(){
        this.server.use(_router2.default)
    }
}

exports. default = new App().server;