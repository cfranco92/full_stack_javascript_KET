const store = require('./store');

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

async function addMessage(data) {
    return new Promise(async (resolve, reject) => {
        if (!data.user || !data.text) {
            return Promise.reject('Invalid data');
        }
        let text = data.text;
        let user = data.user;
        const message = {
            user,
            text,
            date: new Date()
        }

        const result = await (store.add(message));
        resolve(result);
    });
}

module.exports = {
    getMessages,
    addMessage
}