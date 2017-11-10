module.exports = function (app) {
  var postgresDb = app.dataSources.postgres

  postgresDb.automigrate('Todo', function (err) {
    if (err) throw err
    var Todo = app.models.Todo
    Todo.create([
        {
          name: 'Todo 1',
        },
        {
          name: 'Todo 2',
        },
        {
          name: 'Todo 3',
        },
      ]
    )
  })
  console.log('data created')
}
