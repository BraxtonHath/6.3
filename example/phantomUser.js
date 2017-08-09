'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    user: {type: DataTypes.STRING, allowNull: false} //new
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Todo, {as: 'todos', foreignKey: 'userId'});
    User.belongsToMany(models.Todo, {through: 'UserTodos', foreignKey: 'todoId', otherKey: 'userId'}); //new
  };
  return User;
};
