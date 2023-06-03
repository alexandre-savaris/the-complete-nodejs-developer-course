require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6477b7dca074e339e457adff', { age: 44 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 44 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {

    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('6477b7dca074e339e457adff', 45).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
