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
    console.log('Todo created')
  })
  postgresDb.automigrate('Todo_History', function (err) {
    if (err) throw err
    var TodoHistory = app.models.Todo_History
    TodoHistory.create([
      {
        name: 'update 1',
        todoId: 1,
      },
      {
        name: 'update 2',
        todoId: 1,
      },
      {
        name: 'update 3',
        todoId: 1,
      },
      {
        name: 'update 12',
        todoId: 2,
      },
      {
        name: 'update 22',
        todoId: 2,
      },
      {
        name: 'update 32',
        todoId: 2,
      },
    ])
  })
  console.log('Todo_History created')
}
