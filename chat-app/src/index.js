const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

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

let count = 0

io.on('connection', (socket) => {

    console.log('New WebSocket connection!')

    socket.emit('countUpdated', count)

    socket.on('increment', () => {

        count++
        io.emit('countUpdated', count)
    })
})

server.listen(port, () => {

    console.log('Server is up and running!')
})
