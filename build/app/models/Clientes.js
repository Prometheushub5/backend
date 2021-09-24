"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Clientes extends _sequelize.Model {
    static init(sequelize) {
      super.init({
        id: {
          type: _sequelize2.default.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        cpf:{
          type: _sequelize2.default.STRING,
          allowNull: false,
          unique: true
        },
        cep:{
          type:  _sequelize2.default.STRING,
          allowNull: true
        },
        logradouro:{
          type: _sequelize2.default.STRING,
          allowNull: true
        },
        numero:{
          type: _sequelize2.default.STRING,
          allowNull: true
        },
        bairro:{
          type: _sequelize2.default.STRING,
          allowNull:true
        },
        cidade:{
          type: _sequelize2.default.STRING,
          allowNull: true
        },
        uf:{
          type: _sequelize2.default.STRING,
          allowNull: true
        },
        email: {
          type: _sequelize2.default.STRING,
          allowNull: false,
          unique: true,
        },
        telefone:{
          type: _sequelize2.default.STRING,
          allowNull:false
        },
        whats:{
          type: _sequelize2.default.STRING,
          allowNull: false
      },
        curso_id: {
          type: _sequelize2.default.INTEGER,
          references: { model: 'cursos', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
      },
        consultor_id: {
        type: _sequelize2.default.INTEGER,
        references: { model: 'consultores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
    },
        status:{
          type: _sequelize2.default.ENUM,
          values:[
            'NOVO',
            'EM_ATENDIMENTO',
            'CONTRATADO',
            'DESISTENTE'
          ],
          allowNull:false
      },
        created_at: {
          type: _sequelize2.default.DATE,
          allowNull: false,
        },
        updated_at: {
          type: _sequelize2.default.DATE,
          allowNull: false,
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

exports. default = Clientes;