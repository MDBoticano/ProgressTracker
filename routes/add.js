var data = require("../data.json");

exports.addFriend = function(req, res) {
    
  // ------ Form inputs ------------
  var idVal = data.featuredTasks.length + 1;
  //console.log(idVal);
  var titleVal = req.query.title;
  var descVal = req.query.description;
  
  var tag1Val = req.query.tag1;
  var tag2Val = req.query.tag2;
  
  var cp1Val = req.query.cp1;
  var cp2Val = req.query.cp2;
  var cp3Val = req.query.cp3;
  var cp4Val = req.query.cp4;
  var cp5Val = req.query.cp5;
  var cp6Val = req.query.cp6;
  var cp7Val = req.query.cp7;
  var cp8Val = req.query.cp8;
  var cp9Val = req.query.cp9;
  var cp10Val = req.query.cp10;
  
  //Takes all the checkpoint inputs and puts them into an array
  var cpArray = [cp1Val, cp2Val, cp3Val, cp4Val, cp5Val, cp6Val, cp7Val, cp8Val, cp9Val, cp10Val];
  //console.log(cpArray);
  
  //Create an array of checkpoints; removes blank checkpoints
  var validCP = [];
  for (i = 0; i < cpArray.length; i++){
    var curValidCP;    
    if (cpArray[i] != "" && cpArray[i] != undefined){
      curValidCP = cpArray[i];
      //console.log(curValidCP);
      validCP = validCP.concat(curValidCP);
    }    
  }
  //console.log(validCP);
  
  
  //console.log("Add Task Ran");
  //console.log(nameVal + ", " + descVal);

  var checkpoints = [];

  //console.log(checkpoints);
  //Creates the new checkpoints array to put into newTask
  for (i = 0; i <validCP.length; i++){
    var newCP = {"checkpoint": validCP[i]};
    checkpoints.push(newCP);
  }

  //console.log(checkpoints);
  
  
  var newTask = {
    "id": idVal,
    "icon": "defaultIcon",
    "title": titleVal,
    "description": descVal,
    checkpoints,
    "tags": [
      { "tag": tag1Val}
      //{ "tag": tag2Val}
    ],
    "isDone": true,
    "time": ""
  }
  
  //console.log(urlID);
  //console.log(newTask);
  var customTasks = data.currentUser.tasksMade;
  console.log(customTasks);
  customTasks += 1;
  data.currentUser["tasksMade"] = customTasks;
  
  
  
  data.featuredTasks.push(newTask);
  data.taskURLtoID[titleVal] = idVal; //Updates taskURLtoID with new task

  //If there already exists a tag, add the new one
  if(data.tagURLtoID.hasOwnProperty(tag1Val)){
    data.tagURLtoID[tag1Val].push(idVal);
  } else { //create a new one
     data.tagURLtoID[tag1Val] = [idVal];
  }
  //console.log(data.taskURLtoID);
  //console.log(data.tagURLtoID);
  
  //Go to the newly made tracker
  var goToForm = ("/trackerCreator/" + titleVal).toString();
  //console.log(goToForm);
  res.redirect(goToForm); 
}
