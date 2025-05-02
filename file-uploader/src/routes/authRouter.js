const { Router } = require('express');
const authController = require('../controllers/authController');
const { passport } = require('../middlewares/auth');

const authRouter = Router();

authRouter.get('/login', authController.loginGet);
authRouter.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
    }),
);
authRouter.get('/logout', authController.logout);
authRouter.get('/register', authController.registerGet);
authRouter.post('/register', authController.registerPost);
authRouter.get('/username', authController.findByUsername);
authRouter.get('/email', authController.findByEmail);

module.exports = authRouter;
