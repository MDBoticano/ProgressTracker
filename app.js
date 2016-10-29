var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express4-handlebars');

var app = express();

var PORT = 3000;

/* Note this currently doesn't work right now. Error says this isn't included   
 * automatically in express, so if we want to use this, we gotta get it;
 * I tried npm install compress & npm install express-logger but it didn't work
 */
//app.use(express.logger());
//app.use(express.compress());

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || PORT;
app.listen(port,function(){
  console.log('Server running on port %s',port);
});