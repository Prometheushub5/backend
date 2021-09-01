import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Consultores extends Model {
    static init(sequelize) {
        super.init(
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
              nome: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
              },
              whats:{
                  type: Sequelize.STRING,
                  allowNull: false
              },
              senha: {
                  type: Sequelize.VIRTUAL                  
            },
              hash_senha: {
                type: Sequelize.STRING,
              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.DATE
              },
              updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.DATE
              }
        },
        {
          sequelize,
          tableName: 'consultores',
        });
        this.addHook('beforeSave', async consultor => {
            if (consultor.senha){
              consultor.hash_senha = await bcrypt.hash(consultor.senha, 10)
            }
          });
        return this;
    }
    checkPassword(senha){
        return bcrypt.compare(senha, this.hash_senha)
      }   
}


export default Consultores;