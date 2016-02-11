// Written by William Reithmeyer

$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if (scroll >= $(".titleBanner").outerHeight(true)){
        $(".titleBanner").addClass("fadeIn");
        $(".titleBanner .logoText .text .blue").addClass("faded");
    }else {
        $(".titleBanner").removeClass("fadeIn");
        $(".titleBanner .logoText .text .blue").removeClass("faded");
    }
})

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
