// JavaScript Document
for(var j = 2 ; j <= 9; j++){
	if (j <= 5) var hang = document.getElementById("hang_1");
	else var hang = document.getElementById("hang_2");
	var td = document.createElement("td");
	hang.appendChild(td);
	td.setAttribute('id','1');
 	for(var i = 1 ; i <= 10; i++){
			var a = document.getElementById("1");
			var div = document.createElement("div");
			div.innerHTML =  j + " x " + i + " = "+ j*i	;
			a.appendChild(div);
	 }
	document.getElementById("1").setAttribute('id','0');
}