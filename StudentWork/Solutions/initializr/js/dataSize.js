$(document).ready(function(){
	var $buttons = $('input[type=button]');
	//use the console log for testing
	console.log('# of buttons = ' + $buttons.length);
	var $paras = $('p');
	console.log('# of paragraphs = ' + $paras.length);
	
	$buttons.click(function(){
	var $this = $(this);
	//test what $(this) is
	console.log($this);
	var styleSize = $this.data('size');
	$paras.css("font-size",styleSize);
	//color the button you just pressed dark gray to indicate disabled
	//set its siblings back to original color
	$this.css("background-color", "#888").siblings().css("background-color", "#ddd");
	});
});
