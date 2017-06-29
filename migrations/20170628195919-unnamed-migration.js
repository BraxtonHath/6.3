'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'Todos',
      'Todo',
      'task'
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'Todos',
      'task',
      'Todo'
    );
  }
  };
