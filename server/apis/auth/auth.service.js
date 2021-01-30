const users = require('../../users.json');

exports.login = (userData) => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (userData.userName == user.userName && userData.password == user.password) {
            return user;
        }
    }

    return "Account not exist";
}