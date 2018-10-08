		
		//set a variable called canvas to the canvas with id="graphDiv"
		
		
		
		//get the 2d context of the canvas element and set it to a variable called context
		
	
		
		//create bar graph 
		
		var graph = new dynamicBarGraph(context);
		graph.maxValue = 10;
		graph.margin = 2;
		graph.colors = ["#49a0d8", "#d353a0", "#8653d3"];
		graph.xAxisLabelArr = ["Dog", "Cat", "Rabbit"];
		graph.increaseValue = [0, 0, 0];
		graph.update([graph.increaseValue[0], graph.increaseValue[1], graph.increaseValue[2]]);		
        

	function changeBar(){
	var dog=parseInt(document.getElementById('p1').value)+parseInt(document.getElementById('p6').value);
	var cat=parseInt(document.getElementById('p2').value)+parseInt(document.getElementById('p4').value);
	var rabbit=parseInt(document.getElementById('p3').value)+parseInt(document.getElementById('p5').value);
	
	graph.update([dog, cat, rabbit]);

	}
	
	
		function init(){
	//changeBar();	
	//bar graph
	//for button to calculate
	//calculate = document.getElementById("update");
	//calculate.onclick=changeBar;
	//for fields to calculate
	var ratings = document.getElementsByTagName("input");
	var len = ratings.length;
	for(i = 0; i < len; i++){
		ratings[i].oninput = changeBar;
	}
	}
    window.onload=init;