import { Sequelize } from 'sequelize';
import Cursos from '../app/models/Cursos';
import databaseConfig from '../config/database';

const models = [Cursos];

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection));
  }
}  
export default new Database();