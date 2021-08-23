$(function (){
  $("#quotes-form").hide();
  $(".form-overlay").hide();
  $("#header-btn").click(function(){
    $("#quotes-form").fadeIn();
    $(".form-overlay").fadeIn();
    $(".header-btn").fadeOut();
  })

  $(".form-cancel").click(function(){
    $("#quotes-form").fadeOut();
    $(".form-overlay").fadeOut();
    $(".header-btn").fadeIn();
  })
})

