//Global variables

// -- for tracker creator checkpoint highlighting ------------------------
var max_cp = $(".collection-item").length;
var i = 0;
var x = i-1;
var selector = "#item_"+ i;
var done = "#item_"+ x;   
var timeTotal = 0;
var startTime;

$(document).ready(function(){  
    initializePage();
 });  


//Called when document ready
function initializePage() {
  $(".button-collapse").sideNav(); // materialize navbar
  
  $("#CPstart").click(highlightCP); // highlights active checkpoints yellow, colors finished checkpoints green
  
  $('.collapsible').collapsible();
      
}

// In tracker creator, highlights checkpoint based on button click
function highlightCP(){
     console.log(x , i);
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
     //random time per task
     if(i > 0 && i <= max_cp+1) {
       var randTime = Math.floor((Math.random()*90)+90);
       var timeToComplete = (secondsTimeSpanToHMS(randTime));
       var TTCstring = " - " + timeToComplete;

       timeTotal += randTime;
     console.log(secondsTimeSpanToHMS(timeTotal));
     }     
     //Change the text to hint at home & appends time total
     if(i == max_cp){
      var timeToComplete = (secondsTimeSpanToHMS(timeTotal));
      var timeTotalString = '<center><li class="collection-item" id ="item_total">'+timeToComplete+'</li></center>';
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
    return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
}
