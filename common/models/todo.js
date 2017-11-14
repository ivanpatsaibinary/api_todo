'use strict'

module.exports = function (Todo) {
  var app = require('../../server/server')
  var Filter = require('bad-words'),
    filter = new Filter()
  Todo.beforeRemote('create', function (context, modelInstance, next) {
    context.args.data.name = filter.clean(context.args.data.name)
    next()
  })
  //create new row in history table with current todo value and update todo
  Todo.beforeRemote('replaceById', function (context, modelInstance, next) {
    context.args.data.name = filter.clean(context.args.data.name)
    var TodoHistory = app.models.Todo_History
    Todo.findById(context.args.id, {limit: 1},
      function (err, instance) {
        TodoHistory.create({name: instance.name, todoId: instance.id})
      })
    next()
  })
  //delete all history for todo along with todo
  Todo.beforeRemote('deleteById', function (context, modelInstance, next) {
    var TodoHistory = app.models.Todo_History
    TodoHistory.destroyAll({todoId: context.args.id}, function (
      err, info) {
    })
    next()
  })
}
