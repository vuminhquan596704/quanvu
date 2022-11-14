	// JavaScript Document

setInterval(function Dao(){
	var chuoi = document.getElementById("dao").innerHTML;
	var chuoi_complete = chuoi.charAt(chuoi.length-1) + chuoi.slice(0,chuoi.length-1); 
	document.getElementById("dao").innerHTML = chuoi_complete;
},100);
