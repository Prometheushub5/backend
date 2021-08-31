import {Router} from 'express';
import CursoController from './app/controllers/CursoController';
import Database from './database';


Database.init();
const routes = new Router();
routes.post('/cursos',CursoController.store) //primeira rota criaçao dos cursos
export default routes;//teste commit