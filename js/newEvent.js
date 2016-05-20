var value;

var linkArray = ["portfolio", "skills", "about", "contact"];
var sectionHeights = new Array();


$(document).ready(function(){


    _moveIndicator(linkArray[0], 0);
    _moveIndicator(0);

    $("#stickyPort").pin({
        minWidth: 940,
        padding: {top: $("#nav").innerHeight()},
        containerSelector: "#subPort"
    });

    var themecolor = '#1cad7e';
    var _navTop, navHeight;
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
    });



    $('.nav .search a').click(function(){
        $('.nav').toggleClass('showSearch');
        $('.nav .search input').select();
    });

    $(".pmp_info .PMP li").click(function(){

        var liName = $(this).text();
//        alert(liName);

        $(".pmp_info .panel_envelope.pmpHide").hide();


        $(".PMP li").removeClass("selected");
        $(this).addClass("selected");

        $("#" + liName).show();


    });
    $(window).resize(function () {
        for(var m=0; m < linkArray.length; m++){
            sectionHeights[m] = new Array();
            sectionHeights[m][0] = $("#" + linkArray[m]).offset().top - navHeight - 1;
            sectionHeights[m][1] = sectionHeights[m][0] + $("#" + linkArray[m]).height();
        }

        for(var m = 0; m < linkArray.length; m++){
            if ( sectionHeights[m][0] < scrollPos && scrollPos < sectionHeights[m][1]){
                if ( window.innerWidth > 600){
                    $("#nav ." + linkArray[m]).addClass("selected");
                    _moveIndicator(linkArray[m], 0);
                }else {_moveIndicator(0);}
            }else{
                $("#nav ." + linkArray[m]).removeClass("selected");
            }
        }
        if ( sectionHeights[0][0] >= scrollPos ){
            _moveIndicator(0);
        }
    });

    $(window).scroll(function () {
        _navTop = $(".header .photo").innerHeight() * 1;
//        alert(_navTop);

        if ($(document).scrollTop() > (_navTop) ) {
//            $('#nav').css('background-color', 'rgba(31, 61, 92, 1)');
            $('#nav .background').css('opacity', '1');
            $('#nav').removeClass('dark');
        }else{
//            $('#nav').css('background-color', 'rgba(31, 61, 92, ' + ($(document).scrollTop()/ _navTop) + ')');
            $('#nav .background').css('opacity', ($(document).scrollTop()/ _navTop));
            $('#nav').addClass('dark');

        }

        _animateIndicator();


    })


    $(".scrollTo").click(function(event){
        event.preventDefault();
        $('.header .nav ul').css('height', '0');
        $('.more a').empty().append("menu <i class='fa fa-chevron-down'></i>");

        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop:offset - ($('#nav').innerHeight()*1) +1}, { duration: 700, queue: false }, 'easeInOutExpo');




    });

    $('.nav .title').click(function(){
        if ($(window).scrollTop() > 0){
            $('html, body').animate({scrollTop:0}, { duration: 800, queue: true }, 'easeInOutExpo');
        }
    });



});

function _animateIndicator(){

        scrollPos         = $(document).scrollTop();
        navHeight         = $("#nav").innerHeight();

        for(var m=0; m < linkArray.length; m++){
            sectionHeights[m] = new Array();
            sectionHeights[m][0] = $("#" + linkArray[m]).offset().top - navHeight - 1;
            sectionHeights[m][1] = sectionHeights[m][0] + $("#" + linkArray[m]).height();
        }

        for(var m = 0; m < linkArray.length; m++){
            if ( sectionHeights[m][0] < scrollPos && scrollPos < sectionHeights[m][1]){
                if ( window.innerWidth > 600){
                    $("#nav ." + linkArray[m]).addClass("selected");
                    _moveIndicator(linkArray[m]);
                    return false;
                }else {_moveIndicator(0);}

            }else{
                $("#nav ." + linkArray[m]).removeClass("selected");
            }
        }
        if ( sectionHeights[0][0] >= scrollPos ){
            _moveIndicator(0);
        }
}

function _moveIndicator(link, speed = 500){

    if (link == 0){
        $('.navIndicator').hide();
    }else{
        $('.navIndicator').show();

        if  ($("#nav ." + link).offset().left != $('.navIndicator').offset().left){
            $('.navIndicator').animate(
                {
                    left: $("#nav ." + link).offset().left +0,
                    width: $("#nav ." + link).width()
                },
                 { duration: speed, queue: false },
                "easeInOutCubic")
        }
    }
}
