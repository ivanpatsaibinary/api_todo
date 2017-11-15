module.exports = function (app) {
  var dataSource
  if (process.env.DATA_SOURCE) {
    app.models.Todo.attachTo(app.dataSources[process.env.DATA_SOURCE])
    app.models.Todo_History.attachTo(app.dataSources[process.env.DATA_SOURCE])
    dataSource = app.dataSources[process.env.DATA_SOURCE]
  } else {
    dataSource = app.dataSources.postgres
  }

  dataSource.automigrate('Todo', function (err) {
    if (err) throw err
    var Todo = app.models.Todo
    Todo.create([
        {
          name: 'Todo 1',
          lastUpdatedAt: Date.now(),
          createdAt: Date.now(),
        },
        {
          name: 'Todo 2',
          lastUpdatedAt: Date.now() + 1,
          createdAt: Date.now() + 1,
        },
        {
          name: 'Todo 3',
          lastUpdatedAt: Date.now() + 2,
          createdAt: Date.now() + 2,
        },
        {
          name: 'Todo 4',
          lastUpdatedAt: Date.now() + 3,
          createdAt: Date.now() + 3,
        },
        {
          name: 'Todo 5',
          lastUpdatedAt: Date.now() + 4,
          createdAt: Date.now() + 4,
        },
        {
          name: 'Todo 6',
          lastUpdatedAt: Date.now() + 5,
          createdAt: Date.now() + 5,
        },
      ]
    )
    console.log('Todo created')
  })

  dataSource.automigrate('Todo_History', function (err) {
    if (err) throw err
    var TodoHistory = app.models.Todo_History
    TodoHistory.create([
      {
        name: 'update 1',
        todoId: 1,
        createdAt: Date.now(),
      },
      {
        name: 'update 2',
        todoId: 1,
        createdAt: Date.now(),

      },
      {
        name: 'update 3',
        todoId: 1,
        createdAt: Date.now(),

      },
      {
        name: 'update 12',
        todoId: 2,
        createdAt: Date.now(),

      },
      {
        name: 'update 22',
        todoId: 2,
        createdAt: Date.now(),

      },
      {
        name: 'update 32',
        todoId: 2,
        createdAt: Date.now(),
      },
    ])
    console.log('Todo_History created')
  })
}
