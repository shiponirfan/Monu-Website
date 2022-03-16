$(document).ready(function () {
  // Responsive Menu
  $("#mein-menu-active").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
  });
  // Banner Section Active
  $(".banner-active").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // Testimonials Section Active
  $(".testimonials-active").owlCarousel({
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // Partner Section Active
  $(".partner-active").owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // Counter Section
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
