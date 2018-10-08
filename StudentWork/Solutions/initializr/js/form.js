$(document).ready(function() {
	$('.email').on('cut copy paste', function(e){
       	e.preventDefault();
       	alert('Cut/Copy/Paste is disabled for this textbox.');
    });
});