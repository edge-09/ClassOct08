//default variables
document.write("<h2>Default variables and template strings:</h2>");
function greet(fname, mid="NMN", lname){
	document.write(`Hi ${fname} ${mid} ${lname}!`);
} 
greet("John", "Q", "Public");

document.write("<h2>Block-scoped variables:</h2>");
//block scoped variable 
var i = 20;
for(let i = 0; i < 10; i++){
}
document.write(i);

document.write("<h2>Reverse a string:</h2>");
//reverse a string
var str = "abcdef";
document.write(Array.from(str).sort().reverse().join(""));

document.write("<h2>Filter an array:</h2>");
//filter an array and use the arrow operator
var topics = ["JavaScript", "HTML5", "CSS3", "Angular", "React"];
document.write(topics.filter(t => t.length > 5));

document.write("<h2>Loop over an array:</h2>");
//loop over an array and use the arrow operator
var nums = [2, 5, 7, 12, 20, 100];
var squared = [];
nums.forEach(function(n){ 
	let numUS = new Intl.NumberFormat("en-US");
	let num = numUS.format(n * n);
	squared.push(num);
});
/*
nums.forEach(function(n){ 
	let num = new Intl.NumberFormat("en-US").format(n * n);	
	squared.push(num);
});
*/
/*
nums.forEach(n => 
	squared.push(new Intl.NumberFormat("en-US").format(n * n))
);
*/
document.write(squared);
