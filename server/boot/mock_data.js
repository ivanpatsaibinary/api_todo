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
        },
        {
          name: 'Todo 2',
        },
        {
          name: 'Todo 3',
        },
        {
          name: 'Todo 4',
        },
        {
          name: 'Todo 5',
        },
        {
          name: 'Todo 6',
        },
        {
          name: 'Todo 7',
        },
        {
          name: 'Todo 8',
        },
        {
          name: 'Todo 9',
        },
        {
          name: 'Todo 10',
        },
        {
          name: 'Todo 11',
        },
        {
          name: 'Todo 12',
        },
        {
          name: 'Todo 13',
        },
        {
          name: 'Todo 14',
        },
        {
          name: 'Todo 15',
        },
        {
          name: 'Todo 16',
        },
        {
          name: 'Todo 17',
        },
        {
          name: 'Todo 18',
        },
        {
          name: 'Todo 19',
        },
        {
          name: 'Todo 20',
        },
        {
          name: 'Todo 21',
        },
        {
          name: 'Todo 22',
        },
        {
          name: 'Todo 23',
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
