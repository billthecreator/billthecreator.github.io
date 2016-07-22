
var _static = $(document).scrollTop();
var _lastScrollTemp = $(document).scrollTop();
topbarChange();
<<<<<<< HEAD
$(document).ready(function(){

=======
changeInstaPicSize();
$(document).ready(function(){

    resizeMoviePoster();

>>>>>>> origin/master
    $(window).scroll(function () {
        var _top = $('#side_bar').height();
        var _navTop = $('#nav').height();
        var _lastScroll = $(document).scrollTop();

        if ($(document).innerWidth() >= 1000){
<<<<<<< HEAD
            $('#nav .banner').css('background-position', '0px ' + ($(document).scrollTop()/1.15) + 'px');
=======
//            $('#nav .banner').css('background-position', '0px ' + ($(document).scrollTop()/1.15) + 'px');
>>>>>>> origin/master
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

<<<<<<< HEAD
    $("#extendBio").click(function(){
        if ($("#extendBio").hasClass("more")){
            $("#about .extraAbout").css('display', 'inline-block');
            $("#extendBio").text("Read Less");
=======

    $( window ).resize(function() {
        changeInstaPicSize();
        resizeMoviePoster();

    });

    $("#extendBio").click(function(){
        if ($("#extendBio").hasClass("more")){
            $("#about .extraAbout").css('display', 'inline-block');
            $("#extendBio").text("Show Less");
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
    $('#nav').removeClass('showNav');
>>>>>>> origin/master
    $('#drawer').removeClass('showNav');
    $('#side_bar').removeClass('showNav');
    $('#darkOverlay').removeClass('showNav');

    $('body').css('overflow-y', 'scroll');

    _static = $(document).scrollTop();
<<<<<<< HEAD
}

function openNav(){
=======
    $('#nav').animate({left: '0'}, 100, function(){} );
    $('#cards').animate({left: '0'}, 100, function(){} );
}

function openNav(){
    $('#nav').toggleClass('showNav');
>>>>>>> origin/master
    $('#drawer').toggleClass('showNav');
    $('#side_bar').toggleClass('showNav');
    $('#darkOverlay').toggleClass('showNav');

    $('body').css('overflow-y', 'hidden');

    _static = $(document).scrollTop();
<<<<<<< HEAD
=======
    $('#nav').animate({left: '+=100'}, 100, function(){} );
    $('#cards').animate({left: '+=100'},100, function(){} );
    changeInstaPicSize();

>>>>>>> origin/master
}

function topbarChange(){
    if ($(document).innerWidth() <= 960){

<<<<<<< HEAD
        $('#side_bar #cover').css('background-color', "rgba(33, 39, 44, " + ($(document).scrollTop()/300) + ")");
=======
>>>>>>> origin/master

    }

}
<<<<<<< HEAD

=======
function changeInstaPicSize(){

    var _instaPic = '#drawer .nav_Header .nav_H_bk .item';
    var _instaPicContainer = '#drawer .nav_Header';
    var _instaPicWidth = $(_instaPic).attr('data-width');
    var _instaPicHeight = $(_instaPic).attr('data-height');
    var _drawerWidth = $('#drawer').width();

    var _instaHeight = ((_instaPicHeight / _instaPicWidth) * _drawerWidth);


    $(_instaPic).css('height', _instaHeight + "px");
    $(_instaPicContainer).css('height', _instaHeight + "px");
    $("#drawer ul").css('height', "calc(100vh - " + _instaHeight + "px)");

}

function resizeMoviePoster() {
    portCardWitdh = $(".portCard").width();
    $(".portCard").css("height", portCardWitdh * (978/1860));
}
>>>>>>> origin/master
