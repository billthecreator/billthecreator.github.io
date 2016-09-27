// created by William Reithmeyer

var value;

var linkArray = ["portfolio", "skills", "about", "contact"];
var sectionHeights = new Array();


// selected work
var portfolioSelected;

// chrome mobile color
$('head').append('<meta content="#15233C" name="theme-color">');

var s = [
    '█',
    '▓',
    '▒',
    '░',
    '█',
    '▓',
    '▒',
    '░',
    '█',
    '▓',
    '▒',
    '░',
    '<',
    '>',
    '/'
  ];

  var t = [
      'F',
      'r',
      'o',
      'n',
      't',
      'B',
      'a',
      'c',
      'k',
      '-',
      'E',
      'n',
      'd',
  ]

$(document).ready(function (e) {

    // baffle
    if (window.innerWidth <= 940){s=t}

    baffle('.bio', {characters: s}).start().reveal(1500, 500);

    setInterval(function(){
        var changeText = "Front-End Developer and Designer";
        if( $('.bio').text().indexOf("Front-End") >= 0){
            changeText = "Back-End Developer";
            $('.auroral-northern').addClass('dark');
        } else{
            $('.auroral-northern').removeClass('dark');
        }
        baffle('.bio', {characters: s}).text(currentText => changeText).start().reveal(500);
    }, 10000);

    // initiate indicator
    // _moveIndicator(linkArray[0], 0);
    // _moveIndicator(0);

    // list or tab portfolio depending on window size
    $("#RaspberryPiServer").addClass('fadeIn');
    _fixPortfolio();

    // create a sticky header
    $("#stickyPort").pin({
        minWidth: 940,
        padding: {top: $("#nav").innerHeight()},
        containerSelector: "#subPort"
    });

    var themecolor = '#1cad7e';
    var _navTop, navHeight;
    var _aboutTop, _serviceTop, _contactTop;
    var _aboutBottom, _serviceBottom, _contactBottom, scrollPos;

    // mobile drop down indicator
    $('.header .nav .more a').bind('click tap', function(){
        value = $('.more').text().toLowerCase();
        if (value.indexOf("menu") >= 0) {
            $('.header .nav ul').css('height', 'auto');
            $('.more a').empty().append("hide <i class='fa fa-chevron-up'></i>");
        }else {
            $('.header .nav ul').css('height', '0');
            $('.more a').empty().append("menu <i class='fa fa-chevron-down'></i>");
        }
    });

    // hide and show porfolio based on the name of the button
    $(".bubble li").bind('click tap', function(){

        // strip all whitespace from .li text
        var liName = $(this).text().replace(/ /g, '').replace('$', 's');

        // hide all elements
//        $(".pmp_info .panel_envelope.pmpHide").hide();
        $(".pmp_info .panel_envelope.pmpHide").removeClass('fadeIn');

        // only show the one
        $(".PMP li").removeClass("selected");
        $(this).addClass("selected");
//        $("#" + liName).show();
        $("#" + liName).addClass('fadeIn');

        // save selected for resizing purposes
        portfolioSelected = $(this);
    });

    // WINDOW RESIZE EVENT
    $(window).resize(function () {
        // on screen resize, move the indicator to the correct spot
        // _animateIndicator();

        _fixPortfolio();
    });

    // WINDOW SCROLL EVENT
    $(window).scroll(function () {
        //

        if (isScrolledIntoView('.company-logos')){
            $('#nav ul').hide();
        }else {
            $('#nav ul').show();
        }
    });


    // scroll to the spots on the page event
    $(".scrollTo").bind("click tap", function(event){
        event.preventDefault();
        $('.header .nav ul').css('height', '0');
        $('.more a').empty().append("menu <i class='fa fa-chevron-down'></i>");

        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop:offset - ($('#nav').innerHeight()*1) +1}, { duration: 700, queue: false }, 'easeInOutExpo');
    });

    // scroll to the top event
    $('.nav .title').bind("click tap", function(){
        if ($(window).scrollTop() > 0){
            $('html, body').animate({scrollTop:0}, { duration: 800, queue: true }, 'easeInOutExpo');
        }
    });
});

function _fixPortfolio(){
    // on mobile, show all work, not a tabbed section
    if (window.innerWidth <= 940){
        $(".pmp_info .panel_envelope.pmpHide").addClass('fadeIn');
        $('.bubble').hide();
    } else{
        // if user changes window size, this prevents
        // hiding of all elements and not showing the
        // original.

        $('.bubble').show();

        if (portfolioSelected != null){
            $(".pmpHide").removeClass('fadeIn');
            portfolioSelected.click();
        } else {
            $(".pmpHide").removeClass('fadeIn');
            $('#RaspberryPiServer').addClass('fadeIn');
            // $(".PMP li:first-child").click();
        }
    }
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    // alert($(elem).offset());
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


// are you reading this?
// if so, awesome!

// if you're intersesting in my work,
// please consider emailing me
