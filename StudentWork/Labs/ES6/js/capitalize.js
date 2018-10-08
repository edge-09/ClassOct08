"use strict";
function capitalize(){
	let sentence = document.querySelector("h1").innerHTML;
	let words = sentence.split(" ");
	let len = words.length;
	let phrase = [];
	let header = "";
	for(let i=0; i < len; i++){
		phrase.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
	}
	header = phrase.join(" ");
	return header;
}
document.querySelector("h1").innerHTML = capitalize();  
 
  
