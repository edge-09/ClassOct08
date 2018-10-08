"use strict";
const today = new Date();
const year = today.getFullYear();
let deadline = new Date(year, 11, 31);
let differenceMS = deadline.getTime() - today.getTime()
let differenceDays = differenceMS/(1000 * 60 * 60 * 24);
//document.getElementById("deadline").innerHTML = "Only " + Math.floor(differenceDays) + " more days until the end of the year!" ;
document.write("Only " + Math.floor(differenceDays) + " more days until the end of the year!");