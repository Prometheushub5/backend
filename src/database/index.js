import { Sequelize } from 'sequelize';
import Clientes from '../app/models/Clientes';
import Consultores from '../app/models/Consultores';
import Cursos from '../app/models/Cursos';
import databaseConfig from '../config/database';

const models = [Cursos, Consultores, Clientes];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
  }
}  
export default new Database();