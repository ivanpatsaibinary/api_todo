'use strict'

module.exports = function (Todohistory) {
  Todohistory.beforeRemote('find', function (context, modelInstance, next) {
    context.args.filter = Object.assign({}, context.args.filter,
      {order: 'lastUpdateAt DESC'})
    next()
  })
}
