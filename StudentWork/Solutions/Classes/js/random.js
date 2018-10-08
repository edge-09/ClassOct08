//"use strict";


  function generate(){
    let facts = [
	"Although it was developed under the name Mocha, JavaScript was officially called LiveScript with Netscape Navigator 2.0 in September 1995.", 
	"LiveScript was renamed JavaScript when it was released by Netscape Navigator 2.0 in December 1995.", 
	"Naming it JavaScript caused confusion, giving the impression that the language was a spin-off of the Java programming language", 
	"The name JavaScript is a marketing ploy by Netscape to give it the cachet of what was then a hot new Web programming language, Java.",
	"Since the mid-2000s, additional server-side JavaScript implementations have been introduced, such as Node.js in 2009."
	];
    
    let randomFact;
		randomFact = facts[Math.floor(Math.random()*facts.length)];
    
		document.write(randomFact + " <em>(paraphrased from Wikipedia)</em>");
		
   
  }
  
	generate();  
 
  
