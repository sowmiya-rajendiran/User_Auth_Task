const express = require('express');
const errorRoute = require('./utils/errorRoute');
const authRouter = require('./route/authRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/users' , authRouter);

app.use(errorRoute);

module.exports = app;