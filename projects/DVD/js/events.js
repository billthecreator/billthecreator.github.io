var movieWitdh;
$(document).ready(function(){
    resizeMoviePoster();

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
   $( window ).resize(function() {

      resizeMoviePoster();

   });
});

function resizeMoviePoster() {
    movieWitdh = $(".moviePoster").width();
    $(".moviePoster").css("height", movieWitdh * (1.5));
}
