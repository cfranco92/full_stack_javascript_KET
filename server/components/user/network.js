const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

// End-Points
router.get('/', getUsers);
router.get('/:identification', getUser);
router.get('/token/:userToken', getUserByToken);
router.post('/auth/', auth);
router.post('/', addUser);

// Functions
function getUserByToken(req, res) {
    controller.getUserByToken(req.params.userToken)
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
} 

function getUsers(req, res) {
    controller.getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
}

function auth(req, res) {
    controller.authUser(req.body.identification, req.body.password)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
}

function getUser(req, res) {
    controller.getUser(req.params.identification)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
}

function addUser(req, res) {
    controller.addUser(
        req.body.name,
        req.body.userName,
        req.body.password,
        req.body.role
    )
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
}

module.exports = router;