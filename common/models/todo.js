'use strict'

module.exports = function (Todo) {
  var app = require('../../server/server')

  Todo.beforeRemote('**', function (ctx, modelInstance, next) {
    var TodoHistory = app.models.Todo_History
    if (ctx.method.name === 'replaceById') {
      Todo.observe('before save', function (ctx, next) {
        Todo.findById(ctx.instance.id, {limit: 1},
          function (err, instance) {
            console.log('aaaa', instance)
            TodoHistory.create({name: instance.name, todoId: instance.id})
          })
        next()
      })
    }
    console.log(ctx.method.name);
    if (ctx.method.name === 'deleteById') {
      Todo.observe('before delete', function (ctx, next) {
        console.log(ctx.Model, ctx.where);
        TodoHistory.deleteAll({where: {todoId: ctx.where.id}})
        next()
      })
    }
    next()
  })
}
