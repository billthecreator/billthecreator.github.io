$(document).ready(function(){
    $(".scrollTo").click(function(event){
        event.preventDefault();
        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop:offset - 60}, 500);


    });
    $("#toTopButton").click(function(event){
        $('html, body').animate({scrollTop:0}, 200);
    });
    $("#side_bar").click(function(event){
        $('html, body').animate({scrollTop:0}, 200);
    });
});
