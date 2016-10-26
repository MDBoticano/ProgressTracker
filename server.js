var express = require('express');
var app = express();

var PORT = 3000;

//app.use(express.logger());
//app.use(express.compress());

app.use(express.static(__dirname + '/static'));

var port = process.env.PORT || PORT;
app.listen(port,function(){
  console.log('Listening on port %s',port);
})