var data = require('../data.json');


//Old way, when url is just ".../trackerCreator/"
exports.view = function(req, res){
    res.render('trackerCreator',data); 
}
  
//When url is "/trackerCreator/:id"
exports.generate = function(req, res){

  var idVal = data.featuredTasks.length + 1;
  //console.log(idVal);
  
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
  var AppTitle = data.AppTitle;
  
  task = data.featuredTasks[taskID-1]; //Grabs the data in data array, 0 index
  //console.log(task);
  
  var newData = {AppTitle, location, navLinks, task};
  //console.log(newData);
  res.render('trackerCreator', newData);
};