// 视频
$('.video').click(function() {
  var video = $('.video-lp');
  if (video[0].paused) {
    // video.attr({"controls":'controls'});
    video[0].play();
    $('.video-cover').css('opacity', 0);
  } else {
    // video.attr({"controls":false});
    video[0].pause();
    $('.video-cover').css('opacity', 1);
  }
})

//响应式字体大小
$(function() {
  var ww = window.innerWidth,
    FontSize = (120 / 1200) * ww;

  if (ww <= 1200) {
    $('.data-item').css('font-size', FontSize);
    $('.fight-fixbg').css('font-size', FontSize);
  } else {
    $('.data-item').removeAttr("style");
    $('.fight-fixbg').removeAttr("style");
  }
})
$(window).resize(function() {
  var ww = window.innerWidth,
    FontSize = (120 / 1200) * ww;

  if (ww <= 1200) {
    $('.data-item').css('font-size', FontSize);
    $('.fight-fixbg').css('font-size', FontSize);
  } else {
    $('.data-item').removeAttr("style");
    $('.fight-fixbg').removeAttr("style");
  }
})
$(function() {
  /*font-size*/
  var ww = $(window).width();

  function rfz(e, ori) {
    var ww = $(window).width();
    $(e).css({ 'font-size': ww / 1920 * ori + 'px' });
  }
  //
  rfz('.title', 28);
  rfz('.title span', 42);
  rfz('.title2', 30);
  $(window).resize(function() {
    rfz('.title', 28);
    rfz('.title span', 42);
    rfz('.title2', 30);
  })
})
$(function() {
  $('#gotop').click(function() {
    $("html,body").animate({
      scrollTop: 0,
      screenLeft: 0,
    }, 400);
  });
});
//弹出iframe
$(function() {
  $(".pageitem").click(function() {
    $(".fullpagemask").fadeIn();
    $("#resort").fadeIn();
    $("#btn-close").css("top", "50px");
    $("#gotop").css("display", "none");
    $("body").css("overflow-y", "hidden");
  });
  $("#btn-close").click(function() {
    $("#resort").attr("src", " ");
    $("#resort").fadeOut();
    $("#btn-close").css("top", "-150px");
    $(".fullpagemask").fadeOut();
    $("#gotop").css("display", "block");
    $("body").css("overflow-y", "visible");
  });
  $(".no1").click(function() {
    $("#resort").attr("src", "./iframe/xinjiang.html");

  });
  $(".no2").click(function() {
    $("#resort").attr("src", "./iframe/hunan.html");
  });
  $(".no3").click(function() {
    $("#resort").attr("src", "./iframe/beijing.html");
  });
  $(".no4").click(function() {
    $("#resort").attr("src", "./iframe/anhui.html");
  });
  $(".no5").click(function() {
    $("#resort").attr("src", "./iframe/zhejiang.html");
  });
})