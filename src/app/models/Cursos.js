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
            consultor_id: {
                type: Sequelize.INTEGER,
                references: { model: 'consultores', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
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
    static associate = (models) => {
      Cursos.hasMany(models.Clientes,
        { foreignKey: 'clientes_id', as: 'cliente' });
    };
}

export default Cursos;