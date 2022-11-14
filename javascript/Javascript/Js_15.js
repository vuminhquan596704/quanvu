// JavaScript Document
function build(){
	var text = document.getElementById("input").value;
	var bgcolor = document.getElementById("bgcolor").value;
	var wordcolor = document.getElementById("wordcolor").value;
	document.getElementById("contents").innerHTML = "<h1>" + text + "</h1>";
	var div = document.getElementById("contents");
	div.style.color = wordcolor;
	div.style.background = bgcolor;
}