/*
 Custom jquery functions
*/


/*
This is a template of a function
jQuery(document).ready(function() {
	// do something here
});
*/

//Step 3**************************************************
// Link Alert
$(document).ready(function() {
	   //$("a").click(function() {
	$("#step3").on('click',function() {
	   $("#first").on('click',function() {
		 alert("You clicked a link!");
	   $(".stuff").toggle('slow');
	   });
	});
 });

 //Step 4*************************************************
// List Selector
$(document).ready(function() {
	$("#step4").on('click',function() {
		$("#orderedlist").toggleClass("orange");
	});
 });

//Step 5**************************************************
$(document).ready(function() {
	$("#step5").on('click',function() {
		$("#orderedlist > li").toggleClass("green");
	});
 });

//Step 6**************************************************
$(document).ready(function() {
	$("#step6").on('click',function() {
	   $("#orderedlist li:last").hover(function() {
		 $(this).toggleClass("yellow");
	   },function(){
		 $(this).removeClass("yellow");
	   });
	});
 });

 //Step 7**************************************************
$(document).ready(function() {
	$("#step7").on('click',function() {
	   $("#orderedlist").find("li").each(function(i) {
		 $(this).append( " [" + i +"]");
	   });
	});
 });

//Step 8**************************************************
$(document).ready(function() {
   // use this to reset a single form
   $("#step8").click(function() {
     $("form")[0].reset();
   });
 });
 
 //Step 8a**************************************************
$(document).ready(function() {
   // use this to reset several forms at once
   $("#step8a").click(function() {
     $("form").each(function() {
       this.reset();
     });
   });
 });
 
 //Step 9**************************************************
$(document).ready(function() {
   $("#step9").click(function() {
		$("li").not(":has(ul)").css("border", "1px solid black"); 
   });
 });

 //Step 10**************************************************
$(document).ready(function() {
	$("#step10").click(function() {
		$("a[name]").css("background", "red" );
	});
 });
 
 //Step 11**************************************************
$(document).ready(function() {
	$("#step11").click(function() {
		$("a[href*='/content/gallery']").click(function() {
		alert("redirecting hyperlink to '/content/gallery'");

		 // redirecting hyperlink '/content/gallery' to something else
		return false;
	   });
	});
 });
 
 //Step 12**************************************************
$(document).ready(function() {
	$("#step12").click(function() {
	   $('#faq').find('dd').hide().end().find('dt').click(function() {
		 $(this).next().slideToggle();
	   });
	});
 });
 
 //Step 13**************************************************
$(document).ready(function(){
   	$("#step13").click(function() {
	   $("a").hover(function(){
		 $(this).parents("p").addClass("highlight");
	   },function(){
		 $(this).parents("p").removeClass("highlight");
	   });
	});
 });
 
 
  //Exercise 11, Step 3???????????????????????????????????
$(document).ready(function(){
	$("#step14").click(function() {
	   $("a").toggle(function(){
		 $(".stuff").animate({ height: 'hide', opacity: 'hide' }, 'slow');
	   },function(){
		 $(".stuff").animate({ height: 'show', opacity: 'show' }, 'slow');
	   });
	});
 });
 
  //Exercise 11, Step 4??????????????????????????????????????????????
$(document).ready(function(){	
	$("#step15").click(function() {
		$(".accordion2 h3").eq(2).addClass("active");
		$(".accordion2 p").eq(2).show();

		$(".accordion2 h3").click(function(){
			$(this).next("p").slideToggle("slow")
			.siblings("p:visible").slideUp("slow");
			$(this).toggleClass("active");
			$(this).siblings("h3").removeClass("active");
		});
	});
});

 //Exercise 11, Step 5??????????????????????????????????????????????????????
$(document).ready(function(){
	$("#step16").click(function() {
		$(".menu a").hover(function() {
			$(this).next("em").animate({opacity: "show", top: "-75"}, "slow");
		}, function() {
			$(this).next("em").animate({opacity: "hide", top: "-85"}, "fast");
		});
	});

});

