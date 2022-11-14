// JavaScript Document
function Thuc_hien(){
	var chuoi = document.getElementById("input").value;
	var chuoi_changed = document.getElementById("change1").value;
	var chuoi_replace = document.getElementById("change2").value;
	var new_content=chuoi.replaceAll(chuoi_changed,chuoi_replace);
	document.getElementById("input").value = new_content;
}