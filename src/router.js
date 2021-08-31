import {Router} from 'express';
import CursoControle from './app/controllers/CursoControle';
import Database from './database';


Database.init();
const routes = new Router();
routes.post('/cursos',CursoControle) //primeira rota criaçao dos cursos
export default routes;//teste commit