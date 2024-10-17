import express from 'express';
import routes from './routes.js';

const app = express();

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: false }));


// Initial test
// app.get('/', (req, res) => {
//     res.send('It works! It works!!!!!')
// });

app.use(routes);

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
