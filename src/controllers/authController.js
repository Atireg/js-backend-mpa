import { Router } from 'express';
import authService from '../services/authService.js';

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

authController.post('/register', async (req, res) => {

    const { username, email, password, rePassword } = req.body;

    // TODO: check rePassword
    try {
        await authService.register(username, email, password);
        res.redirect('/auth/login')
    } catch (error) {
        // TODO: add error
        res.render('auth/register', { title: 'Register Page', username, email });
    }

})

export default authController;