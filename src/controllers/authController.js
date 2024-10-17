import { Router } from 'express';
import authService from '../services/authService.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

authController.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    try {
        await authService.register(username, email, password, rePassword);
        res.redirect('/auth/login')
    } catch (error) {
        // TODO: add error
        res.render('auth/register', { title: 'Register Page', username, email });
    };

});

authController.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login Page' });
});

authController.post('/auth/login', (req, res) => {
    const { email, password } = req.body;

    const token = authService.login(email, body);
});

export default authController;