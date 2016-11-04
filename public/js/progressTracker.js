 $(document).ready(function(){  
     $(".button-collapse").sideNav(); //materialize navbar
      
        var max_cp = 4;
        var i = 1;
        var x = i-1;
        var selector = "#item_"+ i;
        var done = "#item_"+ x;   
     
     $("#CPstart").click(function(){
        console.log("Clicked!"); 
        //var selector = "#item_"+i;
      
        if(i <= max_cp){     
         //remove class CPactive on current, and add CPdone
            i++;
           // $(done).removeClass("CPactive");
            //$(done).addClass("CPdone");
            $(selector).addClass("CPactive");
            console.log("add success");
        //$("#item_1").css("background-color", "yellow"); 
        //console.log("yellow!");
            //$(selector).removeClass("CPactive");
        
         

         console.log("remove success");
         //Add class CPactive to next on list,
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
