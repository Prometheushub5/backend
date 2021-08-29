'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
//modelagem de dados da tabela cursos
    return queryInterface.createTable('cursos', {
//id do curso, automatico conforme forem criados
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
//nome do curso
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
//nivel de ensino é a categoria, foi remodelado para se adequar a legislação atual sobre oferta de cursos de educação
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
//grau de ortogação
      grau_academico:{
        type:Sequelize.ENUM,
        values:[
          'BACHARELADO',
          'LICENCIATURA',
          'TECNOLÓGICO'
        ],
        allowNull:true,
         },
//nova tabela modalidade (presencial, semi, remoto)
      modalidade:{
        type:Sequelize.ENUM,
        values: [
          'PRESENCIAL',
          'SEMI-PRESENCIAL',
          'REMOTO'],
        allowNull: true,
      },
  //nova tabela, unidade de oferta do curso
      unidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
//data de criação do curso na tabela
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('cursos')
  }
};