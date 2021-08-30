import Sequelize, { Model } from 'sequelize';

class Cursos extends Model {
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
            nivel_ensino:{
                type:Sequelize.ENUM,
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
                type:Sequelize.ENUM,
                values:[
                  'BACHARELADO',
                  'LICENCIATURA',
                  'TECNOLÓGICO'
                ],
                allowNull:true,
                 },
            modalidade:{
                type:Sequelize.ENUM,
                values: [
                  'PRESENCIAL',
                  'SEMI-PRESENCIAL',
                  'REMOTO'],
                allowNull: true,
              },
            unidade: {
                type: Sequelize.STRING,
                allowNull: false,
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
          tableName: 'cursos',
        });
    }
    static associate = (models) => {
      Cursos.hasMany(models.Clientes,
        { foreignKey: 'cliente_id', as: 'cliente' });
    };
}

export default Cursos;