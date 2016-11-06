$(document).ready(function(){  
  
    initializePage();
    //CLEAN THIS UP, PUT THESE FUNCTIONS INTO THEIR OWN ONES (initializePage)
    //!!!PLEASE READ ABOVE!!!//
  
    
      
    //Highlight Active collection
    var max_cp = $(".collection-item").length; //should count # of objects in the collection with checkpoint class
    console.log(max_cp);
    var i = 0;
    var x = i-1;
    var selector = "#item_"+ i;
    var done = "#item_"+ x;   
     
  
    var timeTotal = 0;
     $("#CPstart").click(function(){
       //console.log(x , i+1);
       //Changes "Start" text to "Checkpoint"
       if(i == 1){
         $(this).html("Checkpoint");
       }
       
       //Change the text when apporaching the final checkpoint
       if(i == max_cp-1){
         $(this).html("Finish");
       }
       
       //Change the text to hint at home
       if(i == max_cp){
        var timeToComplete = (secondsTimeSpanToHMS(timeTotal));
        var timeTotalString = '<center><li class="collection-item" id ="item_total">'+timeToComplete+'</li></center>';
        $("#checkpoints").append(timeTotalString) 
        $(this).html("Home");
       }
       
       //Set the link so it goes home; change this to link to statistics or profile page or whatever else
       if(i == max_cp+1){
        $(this).attr("href", "/"); 
       }
       
       if(i > 0 && 1 <= max_cp+1) {
         var randTime = Math.floor((Math.random()*90)+90);
         var timeToComplete = (secondsTimeSpanToHMS(randTime));
         var TTCstring = " - " + timeToComplete;
       
       timeTotal += randTime;
       //console.log(secondsTimeSpanToHMS(timeTotal));
       }
              
       if(i <= max_cp+1){
        console.log("Clicked!"); 
        $(selector).addClass("CPactive");
        $(done).toggleClass("CPactive").addClass("CPdone");
        $(done).append(TTCstring); 
        console.log(selector);

        i++;
        x++;
        selector = "#item_"+ i;
        done = "#item_"+ x;
        console.log("remove success");
       }
       
     });
 });  


//Called when document ready
function initializePage() {
  $(".button-collapse").sideNav(); //materialize navbar
  
}

//


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
