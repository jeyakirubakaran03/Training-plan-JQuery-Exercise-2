$(document).ready(function(){
    // $("#jquery-reference-hidden").removeClass("jquery-reference-hidden");
    
    $("#reference, #reference-section").removeClass("jquery-reference-hidden");
    
    /* **********Changing default colors*********** */
    
    // $(".mypage-header-nav, .leftnav, .center-content, .js-wrapper, .mypage-footer, button, .responsive-heading,.section-content, .section-heading, .project-title, .project-tech, .project-tech-name, .js-container, .mypage-footer-a, .js-heading ").addClass("bg-color table-border-color text-color");
    // $(".section-content, .section-heading, .project-title, .project-tech, .project-tech-name, .js-container, .mypage-footer-a, .js-heading").addClass("text-color");
    
    $(".theme-element").addClass("bg-color table-border-color text-color");
    $("input").removeClass("js-input-field-border");

    $(".submit-button").hover(function(){
        $(this).toggleClass("button-color");
    })

    /* ******************Hiding Footer Section************************** */

    // $("#mypage-footer").hide();
})





// $(document).ready(function(){
//     $(".jquery-reference-hidden").removeClass("jquery-reference-hidden");
    
//     /* **********Changing default colors*********** */
    
//     $(".mypage-header-nav, .leftnav, .center-content, .js-wrapper, .mypage-footer, button, .responsive-heading").addClass("bg-color table-border-color text-color");
//     $(".section-content, .section-heading, .project-title, .project-tech, .project-tech-name, .js-container, .mypage-footer-a, .js-heading").addClass("text-color");
    
//     $("input").removeClass("js-input-field-border");

    
//     $(".submit-button").hover(function(){
//         $(this).toggleClass("button-color");
//     })

//     /* ******************Hiding Footer Section************************** */

//     // $("#mypage-footer").hide();
// })

// $(document).ready(function(){
 

//     /* **********Adding new div*********** */

//     $(`<div>`,{
//         html: '<aside class="leftnav"><h3>References</h3> </aside>'
//     }).appendTo("#mypage-leftnav");

//     $(`<div>`, {
//         html: `<section class="center-content">
//                 <h3 class="responsive-heading">References</h3>
//                 <ul class="list">
//                     <li><span class="course">Name:</span><span class="year"> Shanmugavadivu</span></li>
//                     <li><span class="course">Designation:</span><span class="year">Manager</span></li>
//                     <li><span class="course">Email ID: </span><span class="year">svadivu@gmail.com</span></li>
//                     <li><span class="course">Phone: </span><span class="year">9865432123</span></li>
//                 </ul>
//                 </section>`
//     }).appendTo("main");

//     /* **********Changing default colors*********** */
//     $(".mypage-header-nav, .leftnav, .center-content, .js-wrapper, .mypage-footer, button, .responsive-heading").addClass("bg-color table-border-color");
//     $(".mypage-header-nav, .leftnav, .center-content, .year, .course, .title, .tech, .name, .mypage-footer, .responsive-heading, .container, button, a, .js-heading").addClass("text-color");
//     $("input").addClass("input-border");

//     $(".submit-button").hover(function(){
//         $(this).toggleClass("button-color");
//     })

//     /* ******************Hiding Footer Section************************** */

//     $("#mypage-footer").hide();
// })

