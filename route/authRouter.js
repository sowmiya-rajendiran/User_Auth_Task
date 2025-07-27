const express = require ('express');
const { register, login, myProfile } = require('../controller/authController');
const auth = require('../middlewares/auth');

const authRouter = express.Router();

authRouter.post('/register' , register);
authRouter.post('/login' , login);
authRouter.get('/profile' ,auth.isAuthenticated, myProfile)

module.exports = authRouter;