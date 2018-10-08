window.onload = function() {
var storageFields = document.querySelectorAll(".stored");
var len = storageFields.length;
for(var i = 0; i < len; i++){
  storageFields[i].onkeyup = function() {
    localStorage[this.getAttribute("name")] = this.value;   
  }
}

	//get localStorage for fname and put it in the corresponding form field    
	    
  
    
    //get localStorage for email and put it in the corresponding form field
    
  
    
     //get localStorage for phone and put it in the corresponding form field
     
   
    
     //get localStorage for zip and put it in the corresponding form field
  /*clear localStorage*/
 
//when "clear storage" button is clicked

 var clearBtn = document.getElementById('clear');
    
 clearBtn.onclick = function(){
 
 	//remove fname from localStorage
 
  
   
   //remove email from localStorage
  
   
   //remove phone from localStorage
  
   
   //remove zip from localStorage
     
  	//less safe:
  	//localStorage.clear();
  	
   location.reload();
 };
 
};