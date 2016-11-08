var data = require('../data.json');

// When url is just ".../tag/"
exports.view = function(req, res){

	res.render('tag',data);
};

//When url is "/tag/:tag"
exports.generate = function(req, res){
  var tagURL = req.params.tag;
  tagURL = tagURL.toString();
  console.log(tagURL);
  var tagID = data.tagURLtoID[tagURL];
  //tagID = parseInt(tagID);
  console.log(tagID);
  var navLinks = data.navLinks;
  var location = data.location;
  var tagged = []; 
  var newData = {location, navLinks, tagged};
    console.log(newData);
  for (i = 0; i < tagID.length; i++) {
      var index =tagID[i];
      var curData = data.featuredTasks[index-1];
      //console.log(curData);
      tagged.push(curData);
  }
  
  //tagged = data.featuredTasks[tagID-1];
  //console.log(tagged);
    
  
  console.log(newData);
  
  res.render('tag', newData);
};