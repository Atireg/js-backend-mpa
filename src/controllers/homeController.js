import { Router } from "express"

const homeController = Router();

homeController.get('/', (req, res) => {
    // res.send('It works!!!!!!!!!!!!!');
    res.render('home/index', { layout: false });
})

export default homeController;