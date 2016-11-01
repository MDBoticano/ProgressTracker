var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

//Pages
var index = require('./routes/index');
var profilePage = require('./routes/profilePage');

var app = express();

//Routes
app.get('/',index.view);
<<<<<<< HEAD
app.get('/profilePage', profilePage.view);
=======
app.get('/',login.view);
>>>>>>> 074aab3f287936c8053394b97116d968e6f86b6a



app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/public')));

var PORT = 3000;
var port = process.env.PORT || PORT;

app.listen(port,function(){
  console.log('Server running on port %s',port);
});