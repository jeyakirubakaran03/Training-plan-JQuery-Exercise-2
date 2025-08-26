$(document).ready(function(){
  
  $("#mypage-header-content").addClass("header-shrink");

  $("#mypage-header-content").hover(function(){
    $(this).toggleClass("header-shrink header-expand");
  })

  /* ***********slideDown() implementation for footer********* */

  $(".mypage-footer-content").hide();

  $("#mypage-footer").on("mouseenter", function () {
    $(".mypage-footer-content").stop(true, true).slideDown(10000, function () {
      alert("Animation Complete!")
    })
  })

  $("#mypage-footer").on("mouseleave", function(){
    $(".mypage-footer-content").stop(true).slideUp(1000);
  })

})