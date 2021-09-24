import Sequelize, { Model } from 'sequelize';

class Clientes extends Model {
    static init(sequelize) {
      super.init({
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
          cpf:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          cep:{
            type:  Sequelize.STRING,
            allowNull: false
          },
          logradouro:{
            type: Sequelize.STRING,
            allowNull: false
          },
          numero:{
            type: Sequelize.STRING,
            allowNull: false
          },
          bairro:{
            type: Sequelize.STRING,
            allowNull:false
          },
          cidade:{
            type: Sequelize.STRING,
            allowNull: false
          },
          uf:{
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          telefone:{
            type: Sequelize.STRING,
            allowNull:false
          },
          whats:{
            type: Sequelize.STRING,
            allowNull: false
        },
          curso_id: {
            type: Sequelize.INTEGER,
            references: { model: 'cursos', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        },
          consultor_id: {
            type: Sequelize.INTEGER,
            references: { model: 'consultores', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        },
          status:{
            type: Sequelize.ENUM,
            values:[
              'NOVO',
              'EM_ATENDIMENTO',
              'CONTRATADO',
              'DESISTENTE'
            ],
            defaultValue: 'NOVO',
            allowNull:false
        },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          }
        },
        {
          sequelize,
          tableName: 'clientes',
        });
        return this;
    }
    static associate(models) {
        this.belongsTo( models.Cursos, { foreignKey: 'curso_id', as: 'curso'} )
      }
      static associate(models) {
        this.belongsTo( models.Consultores, { foreignKey: 'consultor_id', as: 'consultor'} )
      }
}

export default Clientes;