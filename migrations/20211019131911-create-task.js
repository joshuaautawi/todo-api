'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        unique : true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue : Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.UUID,
        foreignKey :true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue  : new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue  : new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};