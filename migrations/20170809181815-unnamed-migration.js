'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'todos',
      'assignee',
    {
      type: Sequelize.STRING,
      defaultValue: "me"
    }
  );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'todos',
      'assignee',
    {
      defaultValue: null
    }
  );
}
};
