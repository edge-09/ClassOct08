window.onload = function() {
var storageFields = document.querySelectorAll(".stored");
var len = storageFields.length;
for(var i = 0; i < len; i++){
  storageFields[i].onkeyup = function() {
    localStorage.setItem(this.getAttribute("name"),this.value);   
  }
}
	
	   
      document.getElementById('fname').value = localStorage.getItem("fname");
    

      document.getElementById('email').value = localStorage.getItem("email");
    
      document.getElementById('phone').value = localStorage.getItem("phone");
    
      document.getElementById('zip').value = localStorage.getItem("zip");
    
 var clearBtn = document.getElementById('clear');
    
 clearBtn.onclick = function(){
 
   localStorage.removeItem("fname");
   localStorage.removeItem("email"); 
   localStorage.removeItem("phone");
   localStorage.removeItem("zip");
  
   location.reload();
 };
 
};