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
const db = require('./mongo');
db(env.dbUrl);

// GET MESSAGES
const messageController = require('./components/message/controller');
let myMessages = [];
messageController.getMessages().then((messageList) => {
    myMessages = messageList;
})


// Socket configuration
io.on('connection', function(socket) {
    socket.on('send-message', function(data) {
        // PUSH MESSAGE
        myMessages.push(data)
        messageController.addMessage(data);
        socket.emit('text-event', myMessages)
        socket.broadcast.emit('text-event', myMessages)
    })
})



serverHttp.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
})