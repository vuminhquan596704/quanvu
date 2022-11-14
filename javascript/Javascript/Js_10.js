// JavaScript Document
function tao_mang(){
	Dem = parseInt(document.getElementById("amount").value);
	Mang = new Array();
	var Chuoi ="";
	for(var i = 0; i < Dem; i++)
		{
			Mang[i]= Math.floor(Math.random()*101);
			Chuoi += Mang[i] +" ";
			document.getElementById("1").innerHTML= Chuoi;
		}
}
function Tang(){
	var Chuoi ="";
	Mang.sort(function compare(a,b){return a - b;});
	for(var i = 0; i < Dem; i++){
			Chuoi +=Mang[i] +" ";
			document.getElementById("2").innerHTML= Chuoi;
		}
}

function giam(){
	var Chuoi ="";
	Mang.sort(function compare(a,b){return b - a;});
	for(var i = 0; i < Dem; i++){
			Chuoi +=Mang[i] +" ";
			document.getElementById("3").innerHTML= Chuoi;
		}
}