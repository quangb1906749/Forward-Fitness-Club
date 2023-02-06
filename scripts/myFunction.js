/* Nguyễn Thanh Quang - B1906749
30/05/2021
My Function List
*/

(function(){ 
  var form = document.getElementById('main');       //Lấy phần tử form

  addEvent(form, 'submit', function(e) {             // Khi người dùng submit form thì dừng việc gửi form đi và hiện thông báo
    e.preventDefault();
	alert("Thank you for your interest in our fitness club. We will contact you soon."); 
  });
}());


(function() {
  var form     = document.getElementById('main'); // Lấy form
  var elements = form.elements;                      // Lấy tất cả phần tử input của form
  var options  = elements.genre;                     // Lấy các phần tử có name="genre"
  var all      = document.getElementById('all');     // Lấy phần tử có id all

  function updateAll() {
    for (var i = 0; i < options.length; i++) {       // Cập nhật thuộc tính checked của các checkbox khác theo checkbox All
      options[i].checked = all.checked;              
      console.log(options[i].name);
    }
  }
  addEvent(all, 'change', updateAll);                // Thêm sự kiện cập nhật thuộc tính check của các checkbox khác khi checkbox All thay đổi



  function clearAllOption(e) {						// Bỏ check checkbox all khi có checkbox không được check
    var target = e.target || e.srcElement;           
    if (!target.checked) {                          
      all.checked = false;                           
    }
  }
  for (var i = 0; i < options.length; i++) {         
    addEvent(options[i], 'change', clearAllOption); 
  }

}());