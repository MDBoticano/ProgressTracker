var data = require('../data.json');

exports.views = function(req, res){
	//console.log(data); //displays data to console
	res.render('index',data);
};

exports.view = function(req, res){
    
    var navLinks = data.navLinks;
    var location = data.location;
    //For each tag, grab the first value and add it 
    var featuredTasks = [];
    var numTagged = Object.keys(data.tagURLtoID).length; //Get number of tags
    //console.log(numTagged);
    
    //Get the first value from each tag and put it into a new array
    var firstTasks = [1,2,5,6,7,8]; //hardcoded 
    //Remove any duplicates in the array
    
    //For each value in the array, get that featuredtask and add it to "featuredTasks"
    for (i =-0; i < firstTasks.length; i++){
        var index = firstTasks[i];
        var curData = data.featuredTasks[index-1];
        featuredTasks.push(curData);
    }
    
    
    var newData = {location, navLinks, featuredTasks};
    
    //console.log(newData);
    
    res.render('index',newData);
}