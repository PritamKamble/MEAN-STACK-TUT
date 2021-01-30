const express = require('express');
const empController = require('./employee.controller');
const router = express.Router();

router.get('/', empController.getEmployees);

module.exports = router;