$(function () {

    var slider = $('#scrollPics .slider');

    var imgCon = $('#scrollPics .slider li');  //获取图片

    imgCon.not(imgCon.eq(0)).hide();  //除第一张其它隐藏

    var num = $('#scrollPics .num'); //定义页码

    var len = slider.find('li').length;

    var html_page = '', index = 0;

    //添加页码

    for (var i = 0; i < len; i++) {

        if (i === 0) {

            html_page += '<li class=on >' + (i + 1) + '</li>';

        } else {

            html_page += '<li>' + (i + 1) + '</li>';

        }

    }

    num.html(html_page);

    //显示索引对应的图片

    function showPic(index) {

        imgCon.eq(index).show().siblings("li").hide();

        num.find("li").eq(index).addClass('on').siblings("li").removeClass("on");

    }

    //页码按钮移入

    $('.num li').mouseover(function () {

        index = $(this).index();   //获取索引

        showPic(index);

    })

    $('#scrollPics').hover(function () {

        clearInterval(window.timer);

    }, function () {

        window.timer = setInterval(function () {

            showPic(index);

            index++;

            if (index === len) {

                index = 0;

            }

        }, 2000);

    }).trigger('mouseleave');     //触发被选元素的指定事件

});
window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    var bk= document.getElementById( "baike" );
    var sy= document.getElementById( "shouye" );
    var zj= document.getElementById( "zhuanjia" );
    var al= document.getElementById( "anlifx" );
    var gy= document.getElementById( "guanyu" );
    if( t <= 400){ sy.style.color = "red"; } else { sy.style.color = "black"; } 
    if( t >= 400&&t <1900) { bk.style.color = "red"; } else { bk.style.color = "black"; }
    if( t >= 1900&&t <2450) { zj.style.color = "red"; } else { zj.style.color = "black"; }
    if( t >= 2450&&t <3400) { al.style.color = "red"; } else { al.style.color = "black"; } 
    if( t >= 3400) { gy.style.color = "red"; } else { gy.style.color = "black"; } 
} 
