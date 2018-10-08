$(document).ready(function() {
  	//even and odd 
  	$("p:even").css("color","#777");
  	$("p:odd").css({"color":"#aaa", "font-weight":"600"});
  	//hover
  	//methods are chained together, on separate lines for readability
  	$( "span.quip" ).hover(
  		function() {
    		$( this ).css("font-weight","bold")
    		 		 .append( $( "<span>*</span>" ) );
  			}, function() {
     		$( this ).css({"font-style":"italic", "font-weight":"normal"})
     		  		 .find( "span:last" )
     		  		 .remove();
  	 });
  });	 