const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { extname } = require('path');
const app = express();
const port = 3000;

            app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json()); 
//HTTP logger
app.use(morgan('dev'));

//template engine
var hbs = handlebars.create({ extname: '.hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

const route = require('./routers');

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
