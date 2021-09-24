"use strict";Object.defineProperty(exports, "__esModule", {value: true});require ('dotenv/config')
exports. default = {
  secret:process.env.AUTH_SECRET,
  expiresIn:process.env.AUTH_EXPIRE
}