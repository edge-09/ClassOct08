

function dynamicBarGraph(context) {

  // Private properties and methods
	
  var that = this;
  var startArr;
  var endArr;
  var looping = false;
		
  // Loop method adjusts the height of bar and redraws if neccessary
	var loop = function () {

	  var delta;
	  var animationComplete = true;

	  // Boolean to prevent update function from looping if already looping
	  looping = true;
	  
	  // For each bar
	  for (var i = 0; i < endArr.length; i += 1) {
		// Change the current bar height toward its target height
		delta = (endArr[i] - startArr[i]) / that.animationSteps;
		that.curArr[i] += delta;
		// If any change is made then flip a switch
		if (delta) {
		  animationComplete = false;
		}
	  }
	  // If no change was made to any bars then we are done
	  if (animationComplete) {
		looping = false;
	  } else {
		// Draw and call loop again
		draw(that.curArr);
		setTimeout(loop, that.animationInterval / that.animationSteps);
	  }
	};
		
  // Draw method updates the canvas with the current display
	var draw = function (arr) {
							
	  var numOfBars = arr.length;
	  var barWidth;
	  var barHeight;
	  var border = 2;
	  var ratio;
	  var maxBarHeight;
	  var gradient;
	  var largestValue;
	  var graphAreaX = 0;
	  var graphAreaY = 0;
	  var graphAreaWidth = that.width;
	  var graphAreaHeight = that.height;
	  var i;
	  
		// Update the dimensions of the canvas only if they have changed
	  if (context.canvas.height !== that.height) {
		context.canvas.width = 100;
		context.canvas.height = that.height;
	  }
				
	  // Draw the background color
	  context.fillStyle = that.backgroundColor;
	  context.fillRect(0, 0, that.width, that.height);
					
				
	  // Calculate dimensions of the bar
	  barWidth = graphAreaWidth / numOfBars - that.margin * 2;
	  maxBarHeight = graphAreaHeight ;
				
	  // Determine the largest value in the bar array
	  var largestValue = 0;
	  for (i = 0; i < arr.length; i += 1) {
		if (arr[i] > largestValue) {
		  largestValue = arr[i];	
		}
	  }
	  
	  // For each bar
	  for (i = 0; i < arr.length; i += 1) {
		// Set the ratio of current bar compared to the maximum
		if (that.maxValue) {
		  ratio = arr[i] / that.maxValue;
		} else {
		  ratio = arr[i] / largestValue;
		}
		
		barHeight = ratio * maxBarHeight;
	  
		// Turn on shadow
		context.shadowOffsetX = 2;
		context.shadowOffsetY = 2;
		context.shadowBlur = 2;
		context.shadowColor = "#999";
						
						
	/*					
	
		// Draw bar background
		context.fillStyle = "#333";			
		context.fillRect(that.margin + i * that.width / numOfBars,
		  graphAreaHeight - barHeight,
		  barWidth,
		  barHeight);
			
		
		// Turn off shadow for text after drawing bar
		context.shadowOffsetX = 0;
		context.shadowOffsetY = 0;
		context.shadowBlur = 0;
	  */ 

		// Draw bar color if it is large enough to be visible
		if (barHeight > border * 2) {
			// Create gradient below
				
			//createLinearGradient
			
			gradient = context.createLinearGradient(0, 0, 0, graphAreaHeight);
			gradient.addColorStop(1-ratio, that.colors[i % that.colors.length]);
			gradient.addColorStop(1, "#fff");

			//fill rectangle with gradient by using fillStyle property
			
			context.fillStyle = gradient;
			// create rectangle 
			context.fillRect(that.margin + i * that.width / numOfBars + border,
			  graphAreaHeight - barHeight + border,
			  barWidth - border * 2,
			  barHeight - border * 2);
		}

		
		
	
	
		// Draw bar label if it exists
		if (that.xAxisLabelArr[i]) {					
		 				
		//create text labels 				
		  context.fillStyle = "#333";
		  context.font = "bold 14px sans-serif";
		  context.textAlign = "center";
		  try{
			context.fillText(that.xAxisLabelArr[i],
			  i * that.width / numOfBars + (that.width / numOfBars) / 2,
			  that.height - 10);
			} catch (ex) {}
		  }
		}
	  };

  // Public properties and methods
	
  this.width = 300;
  this.height = 150;	
  this.maxValue;
  this.margin = 5;
  this.colors = [];
  this.curArr = [];
  this.backgroundColor = "#fff";
  this.xAxisLabelArr = [];
  this.yAxisLabelArr = [];
  
  //adjust how quickly and how many steps, larger number are slower, smaller numbers more immediate 
  this.animationInterval = 100;
  this.animationSteps = 10;
	
  // Update method sets the end bar array and starts the animation
	this.update = function (newArr) {

	  // If length of target and current array is different 
	  if (that.curArr.length !== newArr.length) {
		that.curArr = newArr;
		draw(newArr);
	  } else {
		// Set the starting array to the current array
		startArr = that.curArr;
		// Set the target array to the new array
		endArr = newArr;
		// Animate from the start array to the end array
		if (!looping) {	
		  loop();
		}
	  }
	}; 
}