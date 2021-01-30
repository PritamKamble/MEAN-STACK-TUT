const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    email: { type: String, required: true },
    passWord: { type: String, required: true }
});

module.exports = mongoose.model('User', Schema);