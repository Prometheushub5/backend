'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
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
        allowNull: true
      },
      logradouro:{
        type: Sequelize.STRING,
        allowNull: true
      },
      numero:{
        type: Sequelize.STRING,
        allowNull: true
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull:true
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: true
      },
      uf:{
        type: Sequelize.STRING,
        allowNull: true
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
        allowNull:false
    },
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
    return queryInterface.dropTable('clientes')
  }
};
