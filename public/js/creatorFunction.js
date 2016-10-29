
/*** Add text fields ***/
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});




/*** Select hours ***/
$(function(){
    var $select = $(".0-12");
    for (i=0;i<=12;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

/*** Select minutes ***/
$(function(){
    var $select = $(".0-60");
    for (i=0;i<60;i+=5){
        $select.append($('<option></option>').val(i).html(i))
    }
});








