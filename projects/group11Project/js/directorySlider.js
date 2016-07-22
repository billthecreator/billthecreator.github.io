/**
 * directorySlider v0.9 - Loads all images in a specified directory and creates a slide show
 * Author: Justin W. Hall
 * http://www.justinwhall.com/directory-jquery-slider/
 *
 * License: GPL v3
 */

(function($){
   var directorySlider = function(element, options)
   {
       var elem = $(element),
           obj = this,
           elemId = elem[0].id;

       // Merge config settings
       var config = $.extend({
           animation: 'slide',
           filebase: 'slide_',
           extension: 'jpg',
           speed: 1500,
           timeout: 10000,
           directory: null,
           numslides: null,
           height: null,
           width: null
       }, options || {});

       // set slideshow dimensions if set
       if (config.height) {
        $(elem).css('height', config.height);
       }
       if (config.width) {
        $(elem).css('width', "100%");
       }

       $(elem).css('overflow', 'hidden');

       // Get slides
       var slides = [],
       slideNumber = 1;
       var file;

       while(slideNumber <= config.numslides){
         file = config.directory + config.filebase + slideNumber + "." + config.extension;
         slides.push('<span style="color:black; background-image: url('+file+'); display:block;" ></span>');
         slideNumber++;
       }

       // append slideshow
       // apply slide wrap 1st
       var slideWrap = $('<div class="' + elemId + '-slide-wrap" ></div>');
           slideWrap.appendTo(elem);

        // append slide and position absolutley
       $.each(slides, function(index, val) {
         $(val).css({
         }).appendTo(slideWrap);
       });

    setInterval(function(){
       var firstSlide = elem.find('span:first-child'),
           lastSlide = elem.find('span:last-child');
       // Apply animation
       switch(config.animation){

        case 'fade':
            $(lastSlide).animate({
              opacity: 0},
              config.speed, function() {
              $(this).insertBefore(firstSlide).css('opacity', 1);
            });

        break;

        case 'slide':
            $(lastSlide).animate({
              marginLeft: -$(this).width()},
              config.speed, function() {
              $(this).insertBefore(firstSlide).css('marginLeft', 0);
            });


            break;
        default:
            $(lastSlide).animate({
              opacity: 0},
              config.speed, function() {
              $(this).insertBefore(firstSlide).css('opacity', 1);
            });
       }
    }, config.timeout);

   };

   $.fn.directorySlider = function(options)
   {
       return this.each(function()
       {
           var element = $(this);

           // Return early if this element already has a plugin instance
           if (element.data('directorySlider')) return;

           // pass options to plugin constructor
           var directoryslider = new directorySlider(this, options);

           // Store plugin object in this element's data
           element.data('directorySlider', directoryslider);

       });
   };
})(jQuery);