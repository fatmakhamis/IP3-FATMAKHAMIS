/*$(document).ready(function()*/
/* $("#clickable1").click(function() {
  $(".hide1").removeClassName();
  $(".show1").addClassName(hide1);
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

$("#clickable1").on('click',function(){
  $("#clickable1").fadeToggle(2000 ,function(){
    $("#hide2").hide();
    $("#hide3").hide();
    $("#clickable2").show();
    $("#clickable3").show();
  $("#hide1").show();
  });
  });
 
  $("#clickable2").on('click',function(){
  $("#clickable2").fadeToggle(2000 ,function(){
  $("#hide1").hide();
  $("#clickable1").show();
  $("#clickable3").show();
  $("#hide3").hide();
  $("#hide2").show();
  });
  });

  $("#clickable3").on('click',function(){
  $("#clickable3").fadeToggle(2000 ,function(){
  $("#hide2").hide();
  $("#hide1").hide();
  $("#clickable2").show();
  $("#clickable1").show();
  $("#hide3").show();
  });
  });

            
            
           