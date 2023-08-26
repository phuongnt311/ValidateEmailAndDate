var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
function myFunction() {
  const email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("inner_email").innerHTML =
      "*Email không được để trống";
  } else {
    //Dùng regex check định dạng email
    if (!regExp.test(email)) {
      document.getElementById("inner_email").innerHTML =
        "*Email không đúng định dạng. Ex: example@gmail.com";
    } else {
      document.getElementById("inner_email").innerHTML = "";
    }
  }
  const date = document.getElementById("date").value;
  //Date chọn trong text

  var today = new Date(); //Date hiện tại
  var fomartDate = new Date(date); //ép kiểu;

  var compare = today - fomartDate; //so sánh 2 date(today và formatDate)
  if (compare > 0) {
    document.getElementById("inner_date").innerHTML =
      "*Ngày chọn không được nhỏ hơn ngày hiện tại";
  } else {
    document.getElementById("inner_date").innerHTML = "";
  }
}
