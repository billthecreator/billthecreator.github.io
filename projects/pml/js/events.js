var value;

$(document).ready(function(){

    var themecolor = '#1cad7e';
    var _navTop;

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
//        document.location.href= "index.html";
        $('html, body').animate({scrollTop:0}, 200);
    })

    $('.nav .search a').click(function(){
        $('.nav').toggleClass('showSearch');
        $('.nav .search input').select();
    })

    $(".pmp_info .PMP li").click(function(){

        var liName = $(this).text();
//        alert(liName);

        $(".pmp_info .panel_envelope.pmpHide").hide();


        $(".PMP li").removeClass("selected");
        $(this).addClass("selected");

        $("#" + liName).show();


    })

    $(window).scroll(function () {
        _navTop = window.innerHeight * .5;
//        alert(_navTop);

        if ($(document).scrollTop() > (_navTop) ) {
            $('#nav').css('background-color', 'rgba(28, 173, 126, 1)');
            $('#nav').removeClass('dark');
        }else{
            $('#nav').css('background-color', 'rgba(28, 173, 126, ' + ($(document).scrollTop()/ _navTop) + ')');
            $('#nav').addClass('dark');

        }
    })



});
