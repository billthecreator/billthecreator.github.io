

//$(document).ready(function(){
//
//    var _navHeight = $('.header .nav').height();
//    var _headerHeight = $('.header').height();
//    var _navTop = _headerHeight - _navHeight - 48;
//    if ($(document).innerWidth() >= 900){
//        $(window).scroll(function () {
//
//            if ($(document).scrollTop() > (_navTop) ) {
//                if ($(document).innerWidth() >= 1000){
//                   $(".header .nav").css('position', 'fixed');
//                   $(".header .nav").css('top', '0');
//                   $(".header .nav").css('height', '84px');
//                   $(".header .nav").css('box-shadow', '0 7px 7px -5px rgba(0,0,0,.6)');
//                }
//            }
//            else
//            {
//               $(".header .nav").css('position', 'absolute');
//               $(".header .nav").css('top', '');
//               $(".header .nav").css('bottom', '0');
//               $(".header .nav").css('box-shadow', '');
//            }
//        });
//    }
//
//    $( window ).resize(function() {
//        _navHeight = $('.header .nav').height();
//        _headerHeight = $('.header').height();
//        _navTop = _headerHeight - _navHeight - 48;
//    });
//});


var value, hash, gall;
$(document).ready(function(){
    $('.header .nav .more a').click(function(){

        value = $('.more').text().toLowerCase();

        if (value.indexOf("menu") >= 0) {

            $('.header .nav ul').css('height', 'auto');
            $('.more a').empty().append("hide <i class='fa fa-chevron-up'></i>");

        }else{

            $('.header .nav ul').css('height', '0');
            $('.more a').empty().append("menu <i class='fa fa-chevron-down'></i>");

        }


    })

    gall = getUrlParameter('galleryPicture');
    if (gall.length > 0) {
        $('.popup-container .img').css('background-image', "url('images/gallery/" + gall + "')");

        $('.popup-container').css('display', 'block');
    }

    $('.popup-container').click(function(){
        $('.popup-container .img').css('background-image', "");
         $('.popup-container').css('display', 'none');
    })

    $('.nav .search a').click(function(){
        $('.nav').toggleClass('showSearch');
        $('.nav .search input').select();
    })

});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
