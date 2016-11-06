var data = require('../data.json');

//Old way, when url is just ".../trackerCreator/"
exports.view = function(req, res){
    res.render('trackerCreator',data); 
}
  
//When url is "/trackerCreator/:id"
exports.generate = function(req, res){
   var taskID = req.params.id;
  taskID = parseInt(taskID); //Get int version of id
  //console.log(taskID);
  //console.log(data); //displays data to console
  var navLinks = data.navLinks;
  //console.log(navLinks);
  var location = data.location;
  //console.log(location);
  task = data.featuredTasks[taskID-1]; //Grabs the data in data array
  //console.log(task);
  
  var newData = {location, navLinks, task};
  //console.log(newData);
  res.render('trackerCreator', newData);
};