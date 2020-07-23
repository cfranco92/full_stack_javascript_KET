const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myShema = new Schema({
    user: String,
    text: String,
    date: Date
});

const model = mongoose.model('Message', myShema);
module.exports = model;