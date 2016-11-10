var data = require('../data.json');


//Old way, when url is just ".../trackerCreator/"
exports.view = function(req, res){
    res.render('viewDetails',data); 
};
  
//When url is "/trackerCreator/:id"
exports.generate = function(req, res){

  var urlString = req.params.id;

  res.render('viewDetails', data);
};