'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('usertodos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      todoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'todos',
          key: 'id'
        }
      }
    });
  },
  down: function (queryInterface, Sequelize) {
  }
};
