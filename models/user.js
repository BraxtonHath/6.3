'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
  }, {});
    user.associate = function(models){
      user.hasMany(models.todo, {as: 'todos', foreignKey: 'userId'});
      user.belongsToMany(models.todo, {as: 'user', through: 'usertodos', foreignKey: 'todoId', otherKey: 'userId'});
    };
  return user;
};
