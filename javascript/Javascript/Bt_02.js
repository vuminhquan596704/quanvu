// JavaScript Document

function Xoa(a,b,c){
	document.getElementById("a").value=null;
	document.getElementById("b").value=null;
	document.getElementById("c").value=null;
}
function Ptbac2(a,b,c){

	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;

	if(a == 0 )
		{
		
			if(b == 0)
				{
					document.getElementById("kq1").innerHTML="Phương trình vô nghiệm";
				}
			else
				{
					var kq = -c/b;
					document.getElementById("kq1").innerHTML="Phương trình bậc 1 có nghiệm: " + kq.toFixed(2);
				}
		}
	else
		{
			D = b*b -4*a*c;
			if(D > 0)
				{
					var kq1 = (-b-Math.sqrt(D))/2*a;
					var kq2 = (-b+Math.sqrt(D))/2*a;
					document.getElementById("kq1").innerHTML="Phương trình có 2 nghiệm"+ "<br>x1 : " + kq1.toFixed(2)+"<br>x2 : " + kq2.toFixed(2);
					console.log(D);
				}
			if(D == 0)
				{
					var kq = -b/2*a;
					document.getElementById("kq1").innerHTML="Phương trình bậc 1 có nghiệm: " + kq.toFixed(2);
				}
			if(D < 0)
				{
					document.getElementById("kq1").innerHTML="Phương trình vô nghiệm";

				}
		}
}

