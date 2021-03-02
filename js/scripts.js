/*$(document).ready(function()*/
$("#clickable1").click(function() {
  $(".hide1").fadeToggle(3000);
  $(".show1").fadeToggle(3000);
});

$("#clickable2").click(function() {
  $(".hide2").fadeToggle(3000);
  $(".show2").fadeToggle(3000);
});
$("#clickable3").click(function() {
  $(".hide3").fadeToggle(3000);
  $(".show3").fadeToggle(3000);
});
/**$("#sub").click(function(event) {
  var name = $("#name").val();
  alert(name + " Thank you for replying");
  event.preventDefault();
}**/