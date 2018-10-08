"use strict";
document.querySelector("#search").addEventListener("keyup",function () {
  // Declare variables 
  let input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("infoTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    if (td.length != 0) {
	 //only search name	
	 //if (td[0].innerHTML.toUpperCase().indexOf(filter) > -1) {	
      //this makes it work if you change what you type by re-displaying rows
	  if (tr[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
	
  }

})
 
