require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('64766567440de10b2ca14a94').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
