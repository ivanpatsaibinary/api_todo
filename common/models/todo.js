'use strict'

module.exports = function (Todo) {
  var app = require('../../server/server')
  var Filter = require('bad-words'),
    filter = new Filter()
  Todo.beforeRemote('find', function (context, modelInstance, next) {
    context.args.filter = Object.assign({}, context.args.filter,
      {order: ['completed ASC', 'lastUpdateAt DESC']})
    next()
  })

  Todo.beforeRemote('create', function (context, modelInstance, next) {
    context.args.data.name = filter.clean(context.args.data.name)
    context.args.data.createdAt = Date.now()
    context.args.data.lastUpdateAt = Date.now()
    next()
  })
  //create new row in history table with current todo value and update todo
  Todo.beforeRemote('prototype.patchAttributes',
    function (context, modelInstance, next) {
      context.args.data.name = filter.clean(context.args.data.name)
      context.args.data.lastUpdateAt = Date.now()
      var TodoHistory = app.models.Todo_History
      Todo.findById(context.args.data.id, {limit: 1},
        function (err, instance) {
          TodoHistory.create({
            name: instance.name,
            todoId: instance.id,
            createdAt: instance.lastUpdateAt,
          })
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
