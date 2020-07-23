const bcrypt = require('bcrypt');

function getUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function getUser(filterUser) {
    return store.doc(filterUser)
}

function getUserByToken(userToken) {
    return new Promise((resolve, reject) => {
        resolve(store.getUserByToken(userToken));
    });
}

function authUser(identification, password) {
    return new Promise(async (resolve, reject) => {
        const user = await store.doc(identification)

        bcrypt.compare(password, user[0].password)
            .then(equal => {
                if (equal === true) {
                    resolve({ auth: true, identification: user[0]._id });
                } else {
                    reject('Invalid information');
                }
            })
    })
}

async function addUser(identification, phone, name, lastName, address, city, department, neighborhood, photo, password, role,
    companyName, companyLogo, companyCity, companyDepartment, companyNeighborhood) {
    return new Promise(async (resolve, reject) => {
        if (!name || !userName || !password || !role) {
            return Promise.reject('Invalid data');
        }

        password = await bcrypt.hash(password, 5);

        const user = {
            name,
            userName,
            password,
            role,
            date: new Date()
        }

        const result = await (store.add(user));
        resolve(result);
    });
}

module.exports = {
    getUsers,
    addUser,
    getUser,
    getUserByToken,
    authUser
}
