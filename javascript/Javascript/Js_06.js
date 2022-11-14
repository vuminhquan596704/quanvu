function Ket_qua(){
	var kq ="";
	var ten= document.getElementById("ten").value;
	var date= document.getElementById("date").value;
	var pass= document.getElementById("pass").value;	
	var gioi_tinh = document.getElementsByName("Gioi_tinh");
	var i, s ;
	for(i = 0; i < gioi_tinh.length; i++){
			if (gioi_tinh[i].checked == true){
				break;
			}
		}
	if(i == 0) s = "Nam";
	if(i == 1) s = "Nữ";
	var list = document.getElementById("list");
	kq += "Chào mừng " + ten + "\n" + "Bạn là " + s + "\n" +"Mật khẩu của bạn có " + pass.length +" ký tự" + "\n" + "Bạn sinh ngày " + date + "\n" + "Vấn đề bạn quan tâm là " + list.options[list.selectedIndex].text;
	document.getElementById("kq").innerHTML = kq;
}