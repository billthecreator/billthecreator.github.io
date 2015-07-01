$(document).ready(function(){
    $(".scrollTo").click(function(event){
        event.preventDefault();
        var offset = $($(this).attr('href')).offset().top;

        if ( $(document).width() > 1200){
            $('html, body').animate({scrollTop:offset - 0}, 500);}
        else if ( $(document).width() > 640){
            $('html, body').animate({scrollTop:offset - 56}, 500);}
        else{
            $('html, body').animate({scrollTop:offset - 56}, 500);
        }


    });
    $("#toTopButton").click(function(event){
        $('html, body').animate({scrollTop:0}, 200);
    });
    $("#side_bar").click(function(event){
        $('html, body').animate({scrollTop:0}, 200);
    });
});
