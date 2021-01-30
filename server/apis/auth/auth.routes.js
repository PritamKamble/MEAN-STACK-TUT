const express = require('express');
const authController = require('./auth.controller');
const router = express.Router();

router.post('/login', authController.login);

router.post('/register', authController.login);

module.exports = router;