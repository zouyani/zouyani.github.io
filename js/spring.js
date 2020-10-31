window.onload = function() {
  var bg = document.querySelector('.item-bg');
  var mySwiper = new Swiper('.section2-swiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $(function() {
    $('#watch').waypoint(function() {
      $('#gotop').css("display", "block")
    })
  })
  $(function() {
    $('#false').waypoint(function() {
      $('#gotop').css("display", "none");
    })
  })
}