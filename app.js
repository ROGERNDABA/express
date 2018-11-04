const createError = require('http-errors');
const express = require('express');
const xhbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const bdParse = require('body-parser');


var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/static', express.static('public'))

app.use(bdParse.json());
app.use(bdParse.urlencoded({extended: false}))

// view engine setup
app.engine('.hbs', xhbs({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {res.render('home', {message: "HEY THERE"})});

app.post('/', function(req, res) {
  res.send('Username: ' + req.body.username);
  res.redirect('/');
});
app.listen(app.get('port'), () => console.log('app started on port ' + app.get('port')));

module.exports = app;
