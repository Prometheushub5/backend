import express from 'express';
import routes from './router';
import cors from 'cors';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger_output.json';
import './database';




class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
        this.server.use(compression());
        this.server.use(cors())
        this.server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
    }

    routes(){
        this.server.use(routes)
    }
}

export default new App().server;