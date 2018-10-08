"use strict";
  //const target = document.querySelector(".target");
  const links = document.querySelectorAll(".mynav a");
  
  function mouseenterFunc() {
	  //in case it has other classes, use below
	  //let currentClass= this.parentNode.className;
    //if (!this.parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
          //links[i].parentNode.className = "";   
          links[i].style.opacity = "0.25";
      }
	  //use the existing classes
      //this.parentNode.className = currentClass + " " +"active";
      //if you want to style this with a css
	  //this.parentNode.className = "active";
      
	  this.style.opacity = "1";
    //}
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
  }





