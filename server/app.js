const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const authRoutes = require('./apis/auth/auth.routes');
const empRoutes = require('./apis/employees/employee.routes');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://node-shop:node-shop@node-shop-rest-slxeu.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology:true });
mongoose.Promise = global.Promise;

// routes to handle apis
app.use('/auth', authRoutes);
app.use('/employee', empRoutes);

module.exports = app;

