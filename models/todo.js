'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    due: DataTypes.DATE,
    completed: DataTypes.BOOLEAN,
    assignee: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  todo.associate=function(models){
    todo.belongsTo(models.user, {foreignKey: 'userId'});
    todo.belongsToMany(models.user, {through: 'usertodos'});
  };
  return todo;
};
