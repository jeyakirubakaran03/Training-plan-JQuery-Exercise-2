$(document).ready(function(){
    // $("#jquery-reference-hidden").removeClass("jquery-reference-hidden");
    
    $("#reference-heading, #reference-section").show();
    
    /* **********Changing default colors*********** */
    
    // $(".mypage-header-nav, .leftnav, .center-content, .js-wrapper, .mypage-footer, button, .responsive-heading,.section-content, .section-heading, .project-title, .project-tech, .project-tech-name, .js-container, .mypage-footer-a, .js-heading ").addClass("bg-color table-border-color text-color");
    // $(".section-content, .section-heading, .project-title, .project-tech, .project-tech-name, .js-container, .mypage-footer-a, .js-heading").addClass("text-color");
    
    $(".all-blocks").addClass("bg-color table-border-color text-color");
    $("input").removeClass("input-border");

    $(".submit-button").hover(function(){
        $(this).toggleClass("button-color");
    })
})