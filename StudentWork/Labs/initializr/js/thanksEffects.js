$(document).ready(function() {
    
	$('#thanks').on('mouseenter mouseleave','div',  function(e) {
        var $details = $(this).find('.thanksdetails');
        if (e.type == 'mouseenter') {
          $details.fadeTo('fast', 0.7);
        } else {
          $details.fadeOut('fast');
        }
    });

});