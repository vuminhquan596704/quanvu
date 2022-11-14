// JavaScript Document
function change_color(){
	var color = document.getElementById("color").value;
	var div = document.getElementById("div");
	console.log(color);
	div.style.background = color;
	document.getElementById("info").innerHTML="Màu của bạn chọn là " + color;
}