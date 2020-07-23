'user strict'

const express = require('express')
const app = express();
const path = require('path');
const env = require('./env/environment');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(env.publicRoute, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(env.angularIndex));
});


const serverHttp = require('http').Server(app)
const io = require('socket.io')(serverHttp)

// CONNECT DB
const myMessages = []

// Socket configuration
io.on('connection', function(socket) {
    socket.on('send-message', function(data) {
        myMessages.push(data)
        socket.emit('text-event', myMessages)
        socket.broadcast.emit('text-event', myMessages)
    })
})



serverHttp.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
})