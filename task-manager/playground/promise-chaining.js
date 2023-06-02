require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6477b7dca074e339e457adff', { age: 44 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 44 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
