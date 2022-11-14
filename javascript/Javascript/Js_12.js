// JavaScript Document
function Dao(){
	var nhap =  document.getElementById("input").value;
	
	var divide_string = new Array();
	divide_string = nhap.split(" ");
	divide_string.reverse();
	var output = divide_string.join(" ");
	console.log(output);
	document.getElementById("input").value= output;
}