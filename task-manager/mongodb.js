const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Task 3'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("647263f9060cc50760a579e0")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("647263f9060cc50760a579e0")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("647266154315ba5280c0f541") }, (error, user) => {

    //     if (error) {
    //         return console.log('Unable to fetch user!')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {

    //     if (error) {
    //         return console.log('Unable to fetch users!')
    //     }

    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {

    //     if (error) {
    //         return console.log('Unable to fetch users!')
    //     }

    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("6472671b3915790ca44bd32e") }, (error, task) => {

    //     if (error) {
    //         return console.log('Unable to fetch task!')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {

    //     if (error) {
    //         return console.log('Unable to fetch tasks!')
    //     }

    //     console.log(tasks)
    // })

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {

    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {

    //     if (error) {
    //         console.log('Unable to insert users!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: true
    //     }, {
    //         description: 'Task 2',
    //         completed: false
    //     }, {
    //         description: 'Task 3',
    //         completed: true
    //     }
    // ], (error, result) => {

    //     if (error) {
    //         console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })
})
