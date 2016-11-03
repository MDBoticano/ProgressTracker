var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//Pages
var index = require('./routes/index');
var profilePage = require('./routes/profilePage');
var login = require('./routes/login');
var trackerCreator = require('./routes/trackerCreator');
var dummyClock = require('./routes/dummyClock');
var signup = require('./routes/signup');

var app = express();

//Routes
app.get('/',index.view);
app.get('/profilePage', profilePage.view);
app.get('/login', login.view);
app.get('/trackerCreator', trackerCreator.view);
app.get('/dummyClock', dummyClock.view);
app.get('/signup', signup.view);



app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));

var PORT = 3000;
var port = process.env.PORT || PORT;

app.listen(port,function(){
  console.log('Server running on port %s',port);
});