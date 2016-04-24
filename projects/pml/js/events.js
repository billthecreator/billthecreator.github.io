var value;

$(document).ready(function(){

    var themecolor = '#1cad7e';
    var _navTop;
    var _aboutTop, _serviceTop, _contactTop;
    var _aboutBottom, _serviceBottom, _contactBottom, scrollPos;

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


        scrollPos         = $(document).scrollTop();
        _aboutTop         = $("#about").offset().top - $("#nav").innerHeight() - 1;
        _aboutBottom     = (_aboutTop + ($("#about").height()));

        _serviceTop         = $("#specialties").offset().top - $("#nav").innerHeight() - 1;
        _serviceBottom     = (_serviceTop + ($("#specialties").height()));

        _contactTop         = $("#message").offset().top - $("#nav").innerHeight() - 1;
        _contactBottom     = (_contactTop + ($("#message").height()));


        if (_aboutTop < scrollPos && scrollPos < _aboutBottom){
            $("#nav .about").addClass("selected");
        }else{
            $("#nav .about").removeClass("selected");
        }


        if (_serviceTop < scrollPos && scrollPos < _serviceBottom){
            $("#nav .services").addClass("selected");
        }else{
            $("#nav .services").removeClass("selected");
        }


        if (_contactTop < scrollPos && scrollPos < _contactBottom){
            $("#nav .contact").addClass("selected");
        }else{
            $("#nav .contact").removeClass("selected");
        }
//
//        alert(_aboutTop);
//        alert(_serviceTop);
//        alert(_contactTop);

    })

    $(".scrollTo").click(function(event){
        event.preventDefault();
        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop:offset - ($('#nav').innerHeight()*1)}, 1000, 'easeInOutExpo');

        $('.header .nav ul').css('height', '0');
        $('.more a').empty().append("menu <i class='fa fa-chevron-down'></i>");

    });

    $('.nav .title').click(function(){
        if ($(window).scrollTop() > 0){
            $('html, body').animate({scrollTop:0}, 1000, 'easeOutBounce');
        }
    })



});
