"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require ('dotenv/config')
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.listen(process.env.PORT);