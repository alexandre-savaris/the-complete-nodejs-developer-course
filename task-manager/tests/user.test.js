const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async () => {

    const response = await request(app)
        .post('/users')
        .send({
            name: 'Alexandre Savaris',
            email: 'alexandre.savaris@gmail.com',
            password: '1234567890'
        })
        .expect(201)

    // Asserts that the database was changed correctly.
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response.
    expect(response.body).toMatchObject({
        user: {
            name: 'Alexandre Savaris',
            email: 'alexandre.savaris@gmail.com'
        },
        token: user.tokens[0].token
    })

    // Asserts that the password is not stored in plain text.
    expect(user.password).not.toBe('1234567890')
})

test('Should login existing user', async () => {

    const response = await request(app)
        .post('/users/login')
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .expect(200)

    // Asserts that token in response matches users second token.
    const user = await User.findById(userOne._id)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login nonexistent user', async () => {

    await request(app)
        .post('/users/login')
        .send({
            email: 'xxx@yyy.zz',
            password: '9988776655'
        })
        .expect(400)
})

test('Should get profile for user', async () => {

    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {

    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {

    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    // Asserts that the user was removed.
    const user = await User.findById(userOne._id)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user', async () => {

    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async () => {

    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/robot.png')
        .expect(200)

    const user = await User.findById(userOne._id)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {

    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({ name: 'Laura' })
        .expect(200)

    const user = await User.findById(userOne._id)
    expect(user.name).toBe('Laura')
})

test('Should not update invalid user fields', async () => {

    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({ location: 'Street X' })
        .expect(400)
})


//
// User Test Ideas
//
// Should not signup user with invalid name/email/password
// Should not update user if unauthenticated
// Should not update user with invalid name/email/password
// Should not delete user if unauthenticated
