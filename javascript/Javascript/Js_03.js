// JavaScript Document
function Ketqua(){
	var a = parseInt(document.getElementById("a").value);
	var b = parseInt(document.getElementById("b").value);
	var phep_tinh = document.getElementsByName("Pheptinh");
	var kq,i;
	for(i = 0; i < phep_tinh.length; i++)
		{
			if(phep_tinh[i].checked == true)
				{
					break;
				}
		}
	if(i == 0) kq = a + b;
	if(i == 1) kq = a - b;
	if(i == 2) kq = a * b;
	if(i == 3) kq = (a / b).toFixed(2);
	document.getElementById("kq").value = kq;
}