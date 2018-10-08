//from plain contact form
$(document).ready(function() {
	//prevent cut copy and paste on email fields
      	$('.email').on('cut copy paste', function(e){
       			e.preventDefault();
       			alert('Cut/Copy/Paste is disabled for this textbox.');
      		});
   

   	//jquery ui calendar
   	$("#dates").datepicker();
    
    //jquery ui tooltip
 
	$( document ).tooltip();
  		
  
  	//jquery ui dialog box with effects

    $( "#dialog" ).dialog({
       	//auto opens by default
      	//autoOpen: true,
      	//modal disables background until dialog box is closed
      	modal: true,
      	show: {
        	effect: "blind",
        	duration: 1000
      	},
      	hide: {
        	effect: "explode",
        	duration: 1000
      	}
    });
  
  		//jquery ui autocomplete 
  	
    	var availableComments = [
				"Cute! Where can I get one?",
				"How can I find out more?",
				"I have a question."
    		];
    
	    	$( "#comments" ).autocomplete({
      			source: availableComments
    		});
  	});