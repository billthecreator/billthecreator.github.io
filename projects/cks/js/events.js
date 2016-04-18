var value, hash, gall;

$(document).ready(function(){
    gall = getUrlParameter('galleryPicture');

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

    $('.nav .title').click(function(){
        document.location.href= "index.html";
    })

    $('.nav .search a').click(function(){
        $('.nav').toggleClass('showSearch');
        $('.nav .search input').select();
    })

    $('.popup-container').click(function(){
        $('.popup-container .img').css('background-image', "");
        $('.popup-container').css('display', 'none');
    })

    if (gall.length > 0) {
        $('.popup-container .img').css('background-image', "url('images/gallery/" + gall + "')");
        $('.popup-container').css('display', 'block');
    }

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
