window.onload = function() {
  new WOW().init();
  $(function() {
    $('#watch').waypoint(function() {
      $('#gotop').css("display", "block");
    })
  })
  $(function() {
    $('#false').waypoint(function() {
      $('#gotop').css("display", "none");
    })
  });
  var mySwiper = new Swiper('.main-left-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var mySwiper1 = new Swiper('.main-right-swiper', {
    direction: 'vertical',
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 7000,
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    simulateTouch: false,
  });
}