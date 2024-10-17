import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('views', 'src/views');
app.set('view engine', 'hbs');

app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));

// Initial test
// app.get('/', (req, res) => {
//     res.send('It works! It works!!!!!')
// });

app.use(routes);

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
