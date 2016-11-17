//Global variables

// -- for tracker creator checkpoint highlighting ------------------------
var max_cp = $(".collection-item").length;
var i = 0;
var x = i-1;
var selector = "#item_"+ i;
var done = "#item_"+ x;   
var timeTotal = 0;


//For custom checkpoints
var numCheckpoints = $(".customCheckpoints .form-control").length;
var customCPmax = 10;
var customCPmin = 1;


$(document).ready(function(){  
    initializePage();
  
    
    /* Prevent enter from doing anything (e.g. submit form) - this should be 
     * fine tuned for only the form, but it should be okay for now */
    $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
 });  


//Called when document ready
function initializePage() {
  $(".button-collapse").sideNav(); // materialize navbar
  
  $("#CPstart").click(highlightCP);
  
  $('.collapsible').collapsible();
  
  $("#addCheckpoint").click(addCheckpoint);
  
  $("#removeCheckpoint").click(removeCheckpoint);
  
  $("#addTaskForm").submit(requireFields());
      
}

// manual redirect, works for other buttons but not input type submit
function manRedir(){
  console.log("Redirecting");
  window.location.href="/";
  
}

//Check if fields are properly populated, currently nonfunctional other than console.log
function requireFields() {
    //console.log("Submitted!");
    var x = $("#title");
    if (x == null || x == "") {
        alert("Title must be filled out");
        return false;
    }
}


function addCheckpoint(){
  if (numCheckpoints < customCPmax){
  numCheckpoints += 1;
  //console.log(numCheckpoints);
  var placeholderText = "Checkpoint\u00A0" + (numCheckpoints);
  placeholderText = placeholderText.toString();
  //console.log(placeholderText);
  var nameText = "cp" + numCheckpoints;
  var newCheckpoint = '<div class="form-group">' + 
    '<input type="text" class="form-control" id=' + nameText + ' placeholder='+ placeholderText + 
      ' name='+nameText+'></div>';
  $(".customCheckpoints").append(newCheckpoint); 
  }
}

function removeCheckpoint(){
  
  if (numCheckpoints > customCPmin ){
    var removeID = "#cp" + numCheckpoints;
    var lastCheckpoint = $(removeID);
    //console.log("Removed: " + (lastCheckpoint.toString()));

    $(lastCheckpoint).remove(); 

    numCheckpoints -= 1;
    
    //console.log(numCheckpoints);
  }
}


var startTime;
var lastTime;
var timeDiff;
var timeDiffSec;


// In tracker creator, highlights checkpoint based on button click
function highlightCP(){
      console.log(x , i);
      
        
      // initialize start time
      // if there isn't a start time
      if(startTime == undefined){
        lastTime = new Date().getTime(); 
        startTime = lastTime;
        timeDiff = 0;        
        console.log("Time init!");
      } else if (timeDiff != undefined) {
        var curTime = new Date().getTime();
        timeDiff = curTime - lastTime; // Get the first time diff
        lastTime = curTime;
      }
      //console.log(timeDiff);
      timeDiffSec = +((timeDiff/1000).toFixed(2)); //(convert ms to seconds)
      console.log(timeDiffSec);
      
     //Changes "Start" text to "Checkpoint"    
     if(i == 0){
       $(this).html("Checkpoint");
     }
     //Change the text when apporaching the final checkpoint
     if(i == max_cp-1){
       $(this).html("Finish");
     }

     //Set the link so it goes home; change this to link to statistics or profile page etc.
     if(i == max_cp+1){
      $(this).attr("href", "/"); 
     }
     // Keep track of total time
     if(i > 0 && i <= max_cp+1) {
       var timeToComplete = (secondsTimeSpanToHMS(timeDiffSec));
       var TTCstring = " - " + timeToComplete;
       timeTotal+=timeDiffSec;
       console.log(secondsTimeSpanToHMS(timeTotal));
     }     
     //Change the text to hint at home & appends time total
     if(i == max_cp){
      //timeTotal.toFixed(2); //2 decimal places
      var timeToConvert = (secondsTimeSpanToHMS(timeTotal));
      var timeTotalString = '<center><li class="collection-item" id ="item_total">'+timeToConvert+'</li></center>';
      $("#checkpoints").append(timeTotalString); 
      $(this).html("Home");
     }
     //Changes highlighting
     if(i <= max_cp+1){
      //console.log("Clicked!"); 
      $(selector).addClass("CPactive");
      $(done).toggleClass("CPactive").addClass("CPdone");
      $(done).append(TTCstring); 
      //console.log(selector);
      i++;
      x++;
      selector = "#item_"+ i;
      done = "#item_"+ x;
      //console.log("remove success");
     }
}


//Add friend button
function addfriend() // no ';' here
{
    var elem = document.getElementById("addFriendButton");
    elem.type = "button";
    if (elem.value=="Add friend") 
        {
            elem.value = "Added";
        }
    else elem.value = "Add friend";
}


//Time format converter, copied directly from stackoverflow 
function secondsTimeSpanToHMS(s) {
    var h = Math.floor(s/3600); //Get whole hours
    s -= h*3600;
    var m = Math.floor(s/60); //Get remaining minutes
    s -= m*60;
    s = s.toFixed(2);
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}
