const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var completedIndex = 0;


app.get('/', function(req, res) {

  // get the model
  // query for all of our Todos
  models.Todo.findAll().then(function (todos){
    // add the todos to the context
    var context = {
      todoList: todos
      , completed: []
      , completedId: function(){
        return completedIndex++;
      }
    };

    // render a response
    res.render('index', context);
  });

});

app.post('/', function(req, res) {
  // var todo = context.todoList;
  // todo.push(req.body.todoInput);
var date = new Date();
  // get my model
  models.Todo.findAll().then(function (todos){

  });
  // get the data from the request
  // create the model with the request data build
  const todo = models.Todo.build({
  task: req.body.todoInput,
  createdAt: date,
  assignee: 'me'
});
  // save the model back to the database storeing
  todo.save().then(function (todo_updated) {
  console.log(todo_updated.id);
});
  // do a redirect

  res.redirect('/');
});

// app.post('/todo/:id', function(req, res) {
//
//   // get my model
//   // get the data from the request
//   // lookup the correct model using the request data
//   // update the model with the request data
//   // save the model back to the database
//   // do a redirect
//
//   var id = req.params.id;
//   var todoRemove = context.todoList.splice(id, 1);
//   context.completed.push(todoRemove);
//   res.redirect('/');
// });

app.listen(3000, function() {
  console.log('Successfully started express application!');
});
