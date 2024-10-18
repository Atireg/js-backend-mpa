import { Router } from "express"

const homeController = Router();

homeController.get('/', (req, res) => {
    // res.send('It works!!!!!!!!!!!!!');
    // res.render('home/index', { layout: false });
    res.render('home/index', { title: 'Home Page' });
})

//TODO Test if the authorisation works --> remove this part
homeController.get('/authorized', (req, res) => {
    res.send(req.user);
})

export default homeController;