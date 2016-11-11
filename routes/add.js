var data = require("../data.json");

exports.addFriend = function(req, res) {
  
  
  // Form inputs
  var idVal = data.featuredTasks.length + 1;
  console.log(idVal);
  var titleVal = req.query.title;
  var descVal = req.query.description;
  var cp1Val = req.query.cp1;
  var cp2Val = req.query.cp2;
  var cp3Val = req.query.cp3;
  var cp4Val = req.query.cp4;
  var tag1Val = req.query.tag1;
  var tag2Val = req.query.tag2;
  
  console.log("Add Task Ran");
  //console.log(nameVal + ", " + descVal);
  
  var newTask = {
    "id": idVal,
    "title": titleVal,
    "description": descVal,
    "checkpoints": [
      {"checkpoint": cp1Val},
      {"checkpoint": cp2Val},
      {"checkpoint": cp3Val},
      {"checkpoint": cp4Val}
    ],
    "tags": [
      { "tag": tag1Val},
      { "tag": tag2Val}
    ],
    "time": ""
  }
  
  var urlID = {};
  urlID[titleVal] = idVal;

  
  console.log(urlID);
  
  console.log(newTask);
  
  data.featuredTasks.push(newTask);
  data.taskURLtoID[titleVal] = idVal; //Updates taskURLtoID with new task
  data.tagURltoID[tag1Val] = idVal;
  console.log(data.taskURLtoID);
  console.log(data.tagURltoID);
}
