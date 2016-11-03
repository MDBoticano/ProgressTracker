$(document).ready(function(){
   $(".button-collapse").sideNav();
});

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
