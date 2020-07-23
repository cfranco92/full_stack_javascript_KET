const mongoose = require('mongoose');
const Model = require('./model');

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

async function addMessage(message) {
    message._id = new mongoose.Types.ObjectId();
    const myMessage = new Model(message);
    return myMessage.save();
}

module.exports = {
    list: getMessages,
    add: addMessage,
}