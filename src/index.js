import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose'

import routes from './routes.js';

const app = express();

// Setup db
const url = 'mongodb://localhost:27017/'
mongoose.connect(url, {dbName: 'volcanoes'}) //TODO change db name
    .then(() => console.log('DB Connected!'))
    .catch((error) => console.log(`DB failed: ${error}`));


// Setup view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('views', 'src/views');
app.set('view engine', 'hbs');

// Setup express
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

// Initial test
// app.get('/', (req, res) => {
//     res.send('It works! It works!!!!!')
// });

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
