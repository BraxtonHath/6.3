'use strict';
const models = require('../models');


module.exports = {
  up: function (queryInterface, Sequelize) {
    // FIND ALL Todos
    models.Todo.findAll({where: {userId: null}}).then(function(todos){

      for(var i=0; i<todos.length; i++){
        var todo = todos[i];
        // CHANGE THEIR userId = 1
        todo.userId = 1;

        // save them all
        todo.save();
      }

    });


  //   models.Todo.update(
  //     {userId: 1},
  //     {where: {userId:null}}
  //   );
  // },

    // models.Todo.changeColumn({
    // });
    //
    //
    // todo.save().then(function (todo_updated) {
    //
    // });
  },

  down: function (queryInterface, Sequelize) {
    models.Todo.findAll({where: {userId: null}}).then(function(todos){

      for(var i=0; i<todos.length; i++){
        var todo = todos[i];
        // CHANGE THEIR userId = null
        todo.userId = null;

        // save them all
        todo.save();
      }
    });
  }
};
