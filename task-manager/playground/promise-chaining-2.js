require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('64766567440de10b2ca14a94').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {

    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('647911c342c8811a607d844e').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
