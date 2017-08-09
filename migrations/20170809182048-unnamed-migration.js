var models = require('../models');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return models.todo.update(
      { userId: 1},
      {where: {userId: null}}
    );
  },
  down: function (queryInterface, Sequelize) {
  }
};
