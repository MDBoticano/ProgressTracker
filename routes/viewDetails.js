var data = require('../data.json');


//Old way, when url is just ".../trackerCreator/"
exports.view = function(req, res){
    res.render('viewDetails',data); 
};
  
//When url is "/trackerCreator/:id"
exports.generate = function(req, res){

  var urlString = req.params.id;
  //console.log(typeof urlString);
  urlString = urlString.toString(); //string version of url
  //console.log(urlString);
  var taskID = data.taskURLtoID[urlString]; //retrieve id if there is one
  //console.log(taskID); //id recieved
  //console.log(data); //displays data to console
  var navLinks = data.navLinks;
  //console.log(navLinks);
  var location = data.location;
  //console.log(location);
  
  task = data.featuredTasks[taskID-1]; //Grabs the data in data array, 0 index
  //console.log(task);
  
  var newData = {location, navLinks, task};
  //console.log(newData);

  res.render('viewDetails', newData);
};