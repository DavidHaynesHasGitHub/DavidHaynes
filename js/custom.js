/* global  $,  jquery, console, alert*/
$(function(){
  "use strict";
  var rNav           = $(".right-nav");
  var  hInfo          = $(".home .info");
  var  home           = $(".home");
  var  navBtn         = $(".slide-nav-btn");
  var  navBtnActive   = "slide-nav-btn-active";
  var  nav            = $(".slide-nav");
  var  navActive      = "slide-nav-active";
  var  rNavSpan       = $('.right-nav ul li i');
  var  up             = $('.up i');
  var  body           = $("html, body");


  rNav.css("top", (home.height() - rNav.height()) / 2);

  hInfo.css("top", (home.height() - hInfo.height()) / 2);


  //-- slide-nav btn action and style --//
  navBtn.on('click', function(){
    $(this).toggleClass(navBtnActive);
    nav.toggleClass(navActive);
  });

  $(document).on('scroll', function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      rNavSpan.css("background", "rgba(0, 0, 0, 0.54)");
      navBtn.css("background", "rgba(0, 0, 0, 0.54)");
      nav.css("background", "rgba(0, 0, 0, 0.8)");
    } else {
      rNavSpan.css("background", "rgba(255, 255, 255, 0.05)");
      navBtn.css("background", "rgba(255, 255, 255, 0.05)");
      nav.css("background", "rgba(0, 0, 0, 0.38)");
    }
  });


  //------- materialize carousel -------------//
  $('.carousel').carousel();
  //----------- modal [services-section] -----//
  $('.modal').modal();
  body.on('click', function(){
    $(this).css("overflow", "auto");
  });
  //------- arrow up  -------------//
  up.on('click', function() {
    body.animate({
      scrollTop: -690
    }, 1500);
  });
  // up to page fadeIn fadeOut
  $(document).on('scroll', function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      up.css("right", "2%");
    } else {
      up.css("right", "-200px");
    }
  });


  // [smoothScroll]
  $('a').smoothScroll();

});

// -------on load actions [preloader - write effect - body scroll]-----//
$(window).on('load', function(){
  $('.preloader').fadeOut(1000);
  $("body").css("overflow-y", "auto");
  $(".slide-nav-btn").css("right", "2%");
  //-- type.js script--//
  $(".write").typed({
    strings: ["Front End Developer", "Backend Developer",
      "UI /UX Designer", "Graphic Designer"
    ],
    typeSpeed: 100,
    loop: true,
  });
  $(".typed-cursor").hide();
// -------[end type.js script] ------ //
});
