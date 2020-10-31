window.onload = function() {
  new WOW().init();
  var mySwiper = new Swiper('.swiper-banner', {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    lazyLoading: true
  })
  var mySwiper1 = new Swiper('.swiper-section2', {
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        switch (index) {
          case 0:
            text = '春·赏花';
            break;
          case 1:
            text = '春·踏青';
            break;
        }
        return '<span class="' + className + '">' + text + '</span>';
      }
    },
  })
  var mySwiper2 = new Swiper('.section4-swiper', {
    speed: 1000,
    // effect: 'flip',
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    lazy: {
      loadPrevNext: true,
    }
  })
  $('#pic-close').click(function() {
    mySwiper2.slideTo(0, 100000, false); //切换到第一个slide，速度为1秒
  })
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
  var dataMap = [{
      name: '北京'
    }, {
      name: '天津'
    }, {
      name: '上海'
    }, {
      name: '重庆'
    }, {
      name: '河北'
    }, {
      name: '河南'
    }, {
      name: '云南'
    }, {
      name: '辽宁'
    }, {
      name: '黑龙江'
    }, {
      name: '湖南'
    }, {
      name: '安徽'
    }, {
      name: '山东'
    }, {
      name: '新疆'
    }, {
      name: '江苏'
    }, {
      name: '浙江'
    }, {
      name: '江西'
    }, {
      name: '湖北'
    }, {
      name: '广西'
    }, {
      name: '甘肃'
    }, {
      name: '山西'
    }, {
      name: '内蒙古'
    }, {
      name: '陕西'
    }, {
      name: '吉林'
    }, {
      name: '福建'
    }, {
      name: '贵州'
    }, {
      name: '广东'
    }, {
      name: '青海'
    }, {
      name: '西藏'
    }, {
      name: '四川'
    }, {
      name: '宁夏'
    }, {
      name: '海南'
    }, {
      name: '台湾'
    }, {
      name: '香港'
    }, {
      name: '澳门'
    }]
    // 需要在页面上直接标记出来的城市
  var specialMap = ['浙江', '新疆', '云南', '安徽', '北京'];
  // 对dataMap进行处理，使其可以直接在页面上展示
  for (var i = 0; i < specialMap.length; i++) {
    for (var j = 0; j < dataMap.length; j++) {
      if (specialMap[i] == dataMap[j].name) {
        dataMap[j].selected = true;
        break;
      }

    }
  }
  var poimg = {
      新疆: './img/xinjiang6.jpg',
      内蒙古: './img/nmg.jpg',
      四川: './img/sc.jpg',
      云南: './img/yn.jpg',
      湖南: './img/hunan1.jpg',
      湖北: './img/hb.jpg',
      北京: './img/MAIN20200510123407.jpg',
      浙江: './img/zhejiang1.jpg',
      安徽: './img/anhui4.jpg',
      西藏: './img/xz.jpg',
      青海: './img/qh.jpg',
      甘肃: './img/gs.jpg',
      宁夏: './img/nx.jpg',
      山东: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589222162463&di=7ce5a28ad71c346f068d4073f2c87db2&imgtype=0&src=http%3A%2F%2Fi2.bangqu.com%2Fr2%2Fnews%2F20180625%2F304a4e50306537795533.jpg',
      陕西: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2561733009,1499772835&fm=26&gp=0.jpg',
      山西: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589221869531&di=7f4c1fae99324a95ea5165d85435b133&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170417%2F3ccee7e1d94e4ac7b72e02ad50ccd0d4_th.jpeg',
      吉林: 'https://image3.cnpp.cn/upload/images/20171127/13540315213_640x426.jpg',
      辽宁: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589220766684&di=12bce11dbb5c4f12e9ad8e524b134f85&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_70%2Cc_zoom%2Cw_640%2Fupload%2F20170416%2F07a9a552662c4d088c661f50cba25ac4_th.jpeg',
      黑龙江: 'http://5b0988e595225.cdn.sohucs.com/images/20190422/c4507619f4ab4ed89bc3c975c8c6ad05.jpeg',
      河北: 'http://img.mp.itc.cn/upload/20170221/2cb895682234452bab2b3d7d07a0fc06_th.png',
      天津: 'https://inews.gtimg.com/newsapp_bt/0/11523793755/1000',
      河南: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589222318686&di=9e3b4ae40991ff5595e5fa0bad4d4cc5&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170411%2F5e12fc2b3d6e4411a55dacdba14780b4_th.jpeg',
      江苏: 'http://imgbdb3.bendibao.com/wxbdb/news/20203/13/2020313114855_51130.png',
      上海: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589221453526&di=094b5382bac48631cad490fa5da25ca5&imgtype=0&src=http%3A%2F%2Fimg01.cztv.com%2F201703%2F16%2Faca7e9b72fdfbf317c6cc9c56a3cb1be.jpg',
      江西: 'http://5b0988e595225.cdn.sohucs.com/images/20180311/da905731fe5a49779e9c0d91a0a80ca8.jpeg',
      福建: 'https://5b0988e595225.cdn.sohucs.com/images/20180411/bda0a0e3b0d144fd87a28a0784adaabb.jpeg',
      广东: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589221675343&di=2f1b7c4821c665449abb91c1b1efdfff&imgtype=0&src=http%3A%2F%2Fdtres.img.detuyun.cn%2Fadmin%2Fchannel%2F561ca4674e8f7.jpg',
      广西: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589221723748&di=b517433d0834101bccaf3023b61234bc&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190221%2F631f9a0d7aee42b8a271b15ca55b1abb.jpeg',
      贵州: 'http://5b0988e595225.cdn.sohucs.com/images/20180320/794310daab454ddbb309360ddb63d634.jpeg',
      重庆: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589221820718&di=7ff67b6e2098bd885fe7a5997b38b377&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F240%2Fw640h400%2F20180408%2F38a9-fyvtmxc7912512.jpg',
      海南: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589222049200&di=fe672ab9d87429bc81a66e93a788970a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn16%2F86%2Fw1080h606%2F20180829%2F88c7-hikcahf4139894.jpg',
      台湾: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=295649376,2905922966&fm=26&gp=0.jpg',
      香港: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=295649376,2905922966&fm=26&gp=0.jpg',
      南海诸岛: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=295649376,2905922966&fm=26&gp=0.jpg',
      澳门: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589229302890&di=e34b2beaac6946aa30439dc1026d661e&imgtype=0&src=http%3A%2F%2Fpic.iflying.com%2Fupfile%2Feditor%2FTravel%2Fimage%2F20130529%2F20130529140647184718.jpg'
    }
    // 基于准备好的dom，初始化echarts实例
  var mapBoxEchart = echarts.init(document.getElementById('mapBox'));

  // 指定相关的配置项和数据
  var mapBoxOption = {

    tooltip: {
      formatter: function(params) {
        var info = '<p style="font-size:18px">' + params.name + '</p><img src="' + poimg[params.name] + '" width="200px">'
        console.log(poimg[params.name])
        return info;
      },
      backgroundColor: "rgba(0,0,0,0.5)", //提示标签背景颜色
      textStyle: {
        color: "#fff"
      } //提示标签字体颜色
    },
    series: [{
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: true, //显示省份标签
          textStyle: {
            color: "#000"
          } //省份标签字体颜色
        },
        emphasis: { //对应的鼠标悬浮效果
          show: false,
          textStyle: {
            color: "#800080"
          }
        }
      },
      aspectScale: 0.75, //这个参数用于 scale 地图的长宽比。最终的 aspect 的计算方式是：geoBoundingRect.width / geoBoundingRect.height * aspectScale
      zoom: 1.2, //当前视角的缩放比例。
      itemStyle: {
        normal: {
          borderWidth: .5, //区域边框宽度
        },
        emphasis: { //鼠标滑过地图高亮的相关设置
          borderWidth: .5,
          borderColor: '#4b0082',
          areaColor: "#ffdead",
        }
      },
      data: dataMap
    }]
  };
  mapBoxEchart.on('click', function(params) {
    for (let i = 0; i < specialMap.length; i++) {
      if (params.name == specialMap[i]) {
        $(".indexmask").fadeIn();
        $(".full-swiper").fadeIn();
        $("#pic-close").css("top", "50px");
        $("#gotop").css("display", "none");
        $("body").css("overflow-y", "hidden");
        break;
      }
    }
    if (params.name == "新疆") {

      $("#slide-pic1").attr("src", "./img/xj1.jpg");
      $("#slide-pic2").attr("src", "./img/xj2.jpg");
      $("#slide-pic3").attr("src", "./img/xj3.jpg");
      $("#slide-pic4").attr("src", "./img/xj4.jpg");
    } else if (params.name == "安徽") {
      $("#slide-pic1").attr("src", "./img/ah1.jpg");
      $("#slide-pic2").attr("src", "./img/ah2.jpg");
      $("#slide-pic3").attr("src", "./img/ah3.jpg");
      $("#slide-pic4").attr("src", "./img/ah4.jpg");
    } else if (params.name == "北京") {
      $("#slide-pic1").attr("src", "./img/bj4.jpg");
      $("#slide-pic2").attr("src", "./img/bj1.jpg");
      $("#slide-pic3").attr("src", "./img/bj2.jpg");
      $("#slide-pic4").attr("src", "./img/bj3.jpg");
    } else if (params.name == "浙江") {
      $("#slide-pic1").attr("src", "./img/zj1.jpg");
      $("#slide-pic2").attr("src", "./img/zj2.jpg");
      $("#slide-pic3").attr("src", "./img/zj4.jpg");
      $("#slide-pic4").attr("src", "./img/zj3.jpg");
    } else if (params.name == "云南") {
      $("#slide-pic1").attr("src", "./img/yn1.jpg");
      $("#slide-pic2").attr("src", "./img/yn2.jpg");
      $("#slide-pic3").attr("src", "./img/yn3.jpg");
      $("#slide-pic4").attr("src", "./img/yn4.jpg");
    }
  });
  // 使用制定的配置项和数据显示图表
  mapBoxEchart.setOption(mapBoxOption);
  // echart图表自适应
  window.addEventListener("resize", function() {
    mapBoxEchart.resize();
  });
  $("#pic-close").click(function() {
    $(".full-swiper").fadeOut();
    $("#pic-close").css("top", "-150px");
    $(".indexmask").fadeOut();
    $("#gotop").css("display", "block");
    $("body").css("overflow-y", "visible");
  });
}