$(".home-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2.5,
        },
        1200: {
          items: 3,
      }
    }
});

$(".project-slider").owlCarousel({
    items:1,
    dots:false,
    loop:true,
    nav: true,
    margin: 0,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
