window.onload = function() {
  new WOW().init();
  $(function() {
    $('#example-basic').waypoint(function() {
      let demo = new CountUp("counter1", 0, 4.26, 2, 1.5);
      if (!demo.error) {  
        demo.start();
      } else {  
        console.error(demo.error);
      }

      for (let i = 1; i < 3; i++) {
        const options = {  
          separator: '',
        };
        var count = $(".counter");
        var num = $("#counter" + (i + 1)).text();
        let demo = new CountUp(count[i], 0, num, 0, 1.5, options);
        if (!demo.error) {  
          demo.start();
        } else {  
          console.error(demo.error);
        }
      }

    }, {
      offset: '100%'
    });
  });
  var mySwiper = new Swiper('.section2-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var mySwiper1 = new Swiper('.thank', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: 'fade',
  });
  $(function() {
    $('#watch').waypoint(function() {
      $('#gotop').css("display", "block")
    }, {
      offset: '100%'
    })
  })
  $(function() {
    $('#false').waypoint(function() {
      $('#gotop').css("display", "none");
    })
  });
  $("#active-data").click(function() {
    $(".fullpagemask").fadeIn();
    $("#show-data").attr("src", "https://voice.baidu.com/act/newpneumonia/newpneumonia")
    $("#show-data").fadeIn();
    $("#pic-close").css("top", "50px");
    $("#gotop").css("display", "none");
    $("body").css("overflow-y", "hidden");
  });
  $("#pic-close").click(function() {
    $("#show-data").fadeOut();
    $("#pic-close").css("top", "-150px");
    $(".fullpagemask").fadeOut();
    $("#gotop").css("display", "block");
    $("body").css("overflow-y", "visible");
  });


}