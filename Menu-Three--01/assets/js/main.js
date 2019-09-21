(function($){
    "use strict";
    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });






        // Image Slider 
  $('.slider-active').slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });











})(jQuery);







