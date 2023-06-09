const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage, generateLocationMessage } = require('./utils/messages')

const port = process.env.PORT || 3000

const app = express()
// The HTTP server is created explicitly to be used by Socket.IO.
// It won't be possible thourh express.
const server = http.createServer(app)
const io = socketio(server)

// Define public path for Express config.
const publicDirectoryPath = path.join(__dirname, '../public')
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// let count = 0

io.on('connection', (socket) => {

    console.log('New WebSocket connection!')

    socket.on('join', ({ username, room }) => {

        socket.join(room)
        socket.emit('message', generateMessage('Welcome!'))
        socket.broadcast.to(room).emit('message', generateMessage(`${username} has joined!`))
    })

    socket.on('sendMessage', (message, callback) => {

        const filter = new Filter()
        if (filter.isProfane(message)) {
            return callback('Profanity is not allowed!')
        }

        io.emit('message', generateMessage(message))
        callback()
    })

    socket.on('sendLocation', (coords, callback) => {

        io.emit('locationMessage', generateLocationMessage(`https://google.com/maps?q=${coords.latitude},${coords.longitude}`))
        callback('Location shared!')
    })

    socket.on('disconnect', () => {

        io.emit('message', generateMessage('A user has left!'))
    })
})

server.listen(port, () => {

    console.log('Server is up and running!')
})
