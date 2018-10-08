$(document).ready(function () {
	$('.pic').fadeTo('slow', 0.7);
	$('.pic').hover(function () {
	$(this).fadeTo('slow', 1.0); 
	}, function () {
	$(this).fadeTo('slow', 0.5); 
	});
});