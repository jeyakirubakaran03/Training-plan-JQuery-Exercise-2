$(document).ready(function(){
  
    $(".mypage-header-nav").addClass("header-height-decrease");
    
    // $(".mypage-header-nav").hover(function(){
    //     $(this).stop(true).animate({height: "100px"});   
    // },
    // function(){
    //     $(this).stop(true).animate({height: "10px"});
    // })

  $(".mypage-header-nav").hover(function(){
    $(this).removeClass("shrink-in-transition header-height-decrease").addClass("shrink-out-transition header-height-increase");
  },
  function(){
    $(this).removeClass("shrink-out-transition header-height-increase").addClass("shrink-in-transition header-height-decrease");
  })

  /* ***********slideDown() implementation for footer********* */

  $(".mypage-footer").addClass("adding-footer-border");
  $(".mypage-footer-footer").addClass("mypage-footer-footer-hide");

  $(".mypage-footer").on("mouseenter", function () {
    $(".mypage-footer-footer").stop(true, true).slideDown(10000, function () {
      alert("Animation Complete!")
    })
  })
  
  $(".mypage-footer").on("mouseleave", function(){
    $(".mypage-footer-footer").stop(true).slideUp(1000);
  })


})