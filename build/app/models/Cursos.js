"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Cursos extends _sequelize.Model {
    static init(sequelize) {
      super.init(
        {
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
            nivel_ensino:{
                type:_sequelize2.default.ENUM,
                values: [
                  'LATO SENSU',
                  'FORMAÇÃO COMPLEMENTAR',
                  'GRADUAÇÃO',
                  'DOUTORADO',
                  'TÉCNICO',
                  'RESIDÊNCIA',
                  'MESTRADO',
                  'FUNDAMENTAL',
                  'TÉCNICO INTEGRADO',
                  'MÉDIO',
                  'INFANTIL'
                  ],
                allowNull: false,
              },
            grau_academico:{
                type:_sequelize2.default.ENUM,
                values:[
                  'BACHARELADO',
                  'LICENCIATURA',
                  'TECNOLÓGICO'
                ],
                allowNull:true,
                 },
            modalidade:{
                type:_sequelize2.default.ENUM,
                values: [
                  'PRESENCIAL',
                  'SEMI-PRESENCIAL',
                  'REMOTO'],
                allowNull: true,
              },
            unidade: {
                type: _sequelize2.default.STRING,
                allowNull: false,
              },
            consultor_id: {
                type: _sequelize2.default.INTEGER,
                references: { model: 'consultores', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
              },
            created_at: {
                type: _sequelize2.default.DATE,
                allowNull: false,
                defaultValue: _sequelize2.default.NOW
              },
            updated_at: {
                type: _sequelize2.default.DATE,
                allowNull: false,
                defaultValue: _sequelize2.default.NOW
              },
        },
        {
          sequelize,
          tableName: 'cursos',
        });
    }
    static associate(models) {
      this.belongsTo( models.Consultores, { foreignKey: 'consultor_id', as: 'consultor'} )
    }
    static __initStatic() {this.associate = (models) => {
      Cursos.hasMany(models.Clientes,
        { foreignKey: 'clientes_id', as: 'cliente' });
    }}
} Cursos.__initStatic();

exports. default = Cursos;