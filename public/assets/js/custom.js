// import Cookies from "/path/to/js.cookie.mjs";
// Open modal on page load
$(document).ready(function () {
  $("#myModal").modal("show");

  $(".btn").click(function(){
    $("#myModal").modal('hide');

  })
});


