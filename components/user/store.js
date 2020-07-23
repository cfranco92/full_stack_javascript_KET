const mongoose = require('mongoose');
const Model = require('./model');

async function getUsers() {
    const users = await Model.find();
    return users;
}

async function addUser(user) {
    user._id = new mongoose.Types.ObjectId();
    const myUser = new Model(user);
    return myUser.save();
}

async function getUser(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { identification: filterUser };
    }
    const user = await Model.find(filter);
    return user;
}

async function getUserByToken(userToken) {
    const user = await Model.find({
        token: userToken
    });
    return user;
}

module.exports = {
    list: getUsers,
    add: addUser,
    getUserByToken: getUserByToken,
    doc: getUser,
}