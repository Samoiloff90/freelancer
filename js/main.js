// Slider
$('.slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $('.arrows__left'),
  nextArrow: $('.arrows__right'),
  autoplay: true,
  autoplaySpeed: 2100,
  responsive: [{
      breakpoint: 1151,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});
// Up
$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });
// scroll
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
});