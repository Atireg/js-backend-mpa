import { Router } from 'express';
import authService from '../services/authService.js';
import { AUTH_COOKIE_NAME } from '../constants.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

authController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        await authService.register(username, email, password, rePassword);
        res.redirect('/auth/login');
    } catch (error) {
        // TODO: add error
        res.render('auth/register', { title: 'Register Page', username, email });
    };

});

authController.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login Page' });
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);  
        res.cookie(AUTH_COOKIE_NAME, token);
        res.redirect('/');
    } catch (error) {
    //TODO Send error message
        res.render('auth/login', { title: 'Login Page', email });
    }


   
});

export default authController;