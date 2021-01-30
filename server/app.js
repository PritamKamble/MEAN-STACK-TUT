const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const authRoutes = require('./apis/auth/auth.routes');
const empRoutes = require('./apis/employees/employee.routes');
const userRoutes = require('./apis/user/user.routes');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://node-shop:node-shop@node-shop-rest-slxeu.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology:true });
mongoose.Promise = global.Promise;


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// routes to handle apis
app.use('/auth', authRoutes);
app.use('/employee', empRoutes);
app.use('/user', userRoutes);

module.exports = app;

