var data = require('../data.json');

// When url is just ".../tag/"
exports.view = function(req, res){

	res.render('tag',data);
};

//When url is "/tag/:id"
exports.generate = function(req, res){
  var tagURL = req.params.tag;
  tagURL = tagURL.toString();
  console.log(tagURL);
  var navLinks = data.navLinks;
  var location = data.location;
  var tagged; //searches data for all instances of "tagURL"
  var newData = {location, navLinks, tagged};
  
  res.render('tag', newData);
};