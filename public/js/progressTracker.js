$(document).ready(function(){  
    $(".button-collapse").sideNav(); //materialize navbar
      
    //Highlight Active collection
    var max_cp = 4; //should count # of objects in the collection with checkpoint class
    var i = 1;
    var x = i-1;
    var selector = "#item_"+ i;
    var done = "#item_"+ x;   
     
     $("#CPstart").click(function(){
       console.log(x , i+1);
       //Changes "Start" text to "Checkpoint"
       if(i == 1){
         $(this).html("Checkpoint");
       }
       
       //Change the text when apporaching the final checkpoint
       if(i == max_cp){
         $(this).html("Finish");
       }
       
       //Change the text to hint at home
       if(i == max_cp+1){
        $(this).html("Home");
       }
       
       //Set the link so it goes home
       if(i == max_cp+2){
        $(this).attr("href", "/");
       }
       
       
       if(i <= max_cp+1){
        console.log("Clicked!"); 
        $(selector).addClass("CPactive");
        $(done).toggleClass("CPactive").addClass("CPdone");
        $(done).append(" - 1:47"); 
        console.log(selector);

        i++;
        x++;
        selector = "#item_"+ i;
        done = "#item_"+ x;
        console.log("remove success");
       }
       
     });
 });  

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
};
