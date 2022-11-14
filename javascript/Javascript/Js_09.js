// JavaScript Document
function Click(){
	alert("Bạn đã click lên button");
}
function Gui(){
	alert("Bạn đã Submit form");
}
function link(){
	alert("Con trỏ chuột đang nằm trên liên kết")
}
function evt(ev){
	if (ev.keyCode === 9 || ev.keyCode === 13)
		{
			alert("Bạn vừa thay đổi chuỗi nhập")
		}
}