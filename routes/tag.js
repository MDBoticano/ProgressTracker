var data = require('../data.json');

// When url is just ".../tag/"
exports.view = function(req, res){

	res.render('tag',data);
};

//When url is "/trackerCreator/:id"
exports.generate = function(req, res){
  var taskID = req.params.id;
  
  res.render('tag', data);
};