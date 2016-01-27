
var _static = $(document).scrollTop();
var _lastScrollTemp = $(document).scrollTop();
topbarChange();
$(document).ready(function(){

    $(window).scroll(function () {
        var _top = $('#side_bar').height();
        var _navTop = $('#nav').height();
        var _lastScroll = $(document).scrollTop();

        if ($(document).innerWidth() >= 1000){
//            $('#nav .banner').css('background-position', '0px ' + ($(document).scrollTop()/1.15) + 'px');
        }

        topbarChange();

        if ($(document).scrollTop() > (_navTop - 28) ) {
            if ($(document).innerWidth() >= 1000){
               $("#nav .hamburger").addClass('black');
            }
        }
        else
        {
            $("#nav .hamburger").removeClass('black');
        }

        _lastScrollTemp = $(document).scrollTop();


    });

    $("#extendBio").click(function(){
        if ($("#extendBio").hasClass("more")){
            $("#about .extraAbout").css('display', 'inline-block');
            $("#extendBio").text("Read Less");
            $("#extendBio").toggleClass("more");
        } else {
            $("#about .extraAbout").css('display', 'none');
            $("#extendBio").text("Read More");
            $("#extendBio").toggleClass("more");
        }
    });

    $('.hamburger').click(function(){
        openNav();
    });
});

$('.nav_Header').click(function(){
    closeNav();
});
$('.ii').click(function(){
    closeNav();
});


$('#cards *').click(function(){
    closeNav();
});
$('#darkOverlay').click(function(){
    closeNav();
});


function closeNav(){
    $('#drawer').removeClass('showNav');
    $('#side_bar').removeClass('showNav');
    $('#darkOverlay').removeClass('showNav');

    $('body').css('overflow-y', 'scroll');

    _static = $(document).scrollTop();
}

function openNav(){
    $('#drawer').toggleClass('showNav');
    $('#side_bar').toggleClass('showNav');
    $('#darkOverlay').toggleClass('showNav');

    $('body').css('overflow-y', 'hidden');

    _static = $(document).scrollTop();
}

function topbarChange(){
    if ($(document).innerWidth() <= 960){

        $('#side_bar #cover').css('background-color', "rgba(33, 39, 44, " + ($(document).scrollTop()/300) + ")");

    }

}

