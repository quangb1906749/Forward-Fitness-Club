/* Nguyễn Thanh Quang - B1906749
30/05/2021
My Function List
*/


var burpee = document.getElementById("burpee");//Lấy phần tử có id burpee
var plank = document.getElementById("plank");//Lấy phần tử có id plank
var mc = document.getElementById("mc");//Lấy phần tử có id mc

//Hàm mở trang burpees.html
function burpees() { 
	window.open("examplePages/burpees.html", "_blank", "width=610, height=360");
}

//Hàm mở trang plank.html
function planks() {
	window.open("examplePages/plank.html", "_blank", "width=610, height=360");
}

//Hàm mở trang mtn.html
function mtnClimber() {
	window.open("examplePages/mtn.html", "_blank", "width=610, height=360");
}

addEvent(burpee, 'click', burpees); //Thêm sự kiện click cho phần tử burpee
addEvent(plank, 'click', planks);  //Thêm sự kiện click cho phần tử plank
addEvent(mc,'click',mtnClimber);	//Thêm sự kiện click cho phần tử mc