import { Router } from "express"

const homeController = Router();

homeController.get('/', (req, res) => {
    // res.send('It works!!!!!!!!!!!!!');
    // res.render('home/index', { layout: false });
    res.render('home/index', { title: 'Home Page' });
})

export default homeController;