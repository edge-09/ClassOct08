$(document).ready(function() {
//pullquotes, gradients from css
//does not matter if single or double quotes except when nesting quotes
	$('span.quip').each(function() {
  		var $quote=$(this).clone();
  		$quote.removeClass('quip').addClass('pull');
  		$(this).before($quote);
  			
  		$quote.hover(function(){
		$(this).removeClass("pull").addClass("pullHighlight");
  		},
  		function(){
		$(this).removeClass("pullHighlight").addClass("pull");
  		});
  			
		}); 
});		