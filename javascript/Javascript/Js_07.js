// JavaScript Document
function check(){
	var thong_bao="";
	var ho = document.getElementById("Ho").value;
	var ten = document.getElementById("Ten").value;
	var email = document.getElementById("Mail").value;
	var dt = document.getElementById("Sdt").value;
	var so_luong = document.getElementById("Sl").value;
	var ngay = new Date(document.getElementById("date").value);
	var purchase = document.getElementsByName("purchase");
	var today =new Date();
	var check_radio = false;
	for(var i = 0; i < purchase.length; i++)
		{
			if (purchase[i].checked == true){
				check_radio = true;
				break;
			}
		}
	console.log(ngay);
	if (ho.length < 1) thong_bao +="Vui lòng nhập lại họ" +"<br>";
	if (ten.length < 1) thong_bao +="Vui lòng nhập lại Tên" + "<br>";
	if (email.indexOf('@')== -1) thong_bao +="Vui lòng nhập lại Email" +"<br>";
	if (dt.length < 10) thong_bao +="Vui lòng nhập lại Số điện thoại" +"<br>";
	if (so_luong.length < 1) thong_bao +="Vui lòng nhập lại Số lượng mua" +"<br>";
	if (ngay < today || ngay == "Invalid Date")  thong_bao +="Vui lòng nhập lại ngày" +"<br>";
	if(check_radio == false ) thong_bao += "Vui lòng lựa chọn" +"<br>"
	if (thong_bao=="")  thong_bao +="Nhập thành công";
	document.getElementById("tb").innerHTML = thong_bao;
}