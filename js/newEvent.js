var value;

var linkArray = ["portfolio", "skills", "about", "contact"];
var sectionHeights = new Array();

$(document).ready(function(){
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
            $('#nav').css('background-color', 'rgba(31, 61, 92, 1)');
            $('#nav').removeClass('dark');
        }else{
            $('#nav').css('background-color', 'rgba(31, 61, 92, ' + ($(document).scrollTop()/ _navTop) + ')');
            $('#nav').addClass('dark');

        }


        scrollPos         = $(document).scrollTop();
        navHeight         = $("#nav").innerHeight();

        for(var m=0; m < linkArray.length; m++){
            sectionHeights[m] = new Array();
            sectionHeights[m][0] = $("#" + linkArray[m]).offset().top - navHeight - 1;
            sectionHeights[m][1] = sectionHeights[m][0] + $("#" + linkArray[m]).height();
        }

        for(var m = 0; m < linkArray.length; m++){
            if ( sectionHeights[m][0] < scrollPos && scrollPos < sectionHeights[m][1]){
                $("#nav ." + linkArray[m]).addClass("selected");
            }else{
                $("#nav ." + linkArray[m]).removeClass("selected");
            }
        }

    })

    $(".scrollTo").click(function(event){
        event.preventDefault();
        $('.header .nav ul').css('height', '0');
        $('.more a').empty().append("menu <i class='fa fa-chevron-down'></i>");

        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop:offset - ($('#nav').innerHeight()*1) +1}, 1000, 'easeInOutExpo');



    });

    $('.nav .title').click(function(){
        if ($(window).scrollTop() > 0){
            $('html, body').animate({scrollTop:0}, 1000, 'easeOutBounce');
        }
    })



});
