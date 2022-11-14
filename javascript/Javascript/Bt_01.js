// JavaScript Document
function Xuat(ten,date)
{
var ten = document.getElementById("ten").value;
var date = document.getElementById("nam-sinh").value;

document.getElementById("kq1").innerHTML = "Chào bạn " + ten + "!";
document.getElementById("kq2").innerHTML = "<BR>Tuổi của bạn là " + date;
}