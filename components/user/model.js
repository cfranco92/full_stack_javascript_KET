const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myShema = new Schema({
    name: String,
    userName: String,
    password: String,
    role: String,
    date: Date
});

const model = mongoose.model('User', myShema);
module.exports = model;