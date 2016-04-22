var value;

$(document).ready(function(){

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
        document.location.href= "index.html";
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



});
