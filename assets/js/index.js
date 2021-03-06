/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    'use strict';

    var $document = $(document);

    $document.ready(function () {

        // Listerner Comments click area
        $('.post-comments h5').on('click', function(e){
            e.preventDefault(); 

            $('#fbCommentBox').toggleClass('hidden');
            $('#arrow').toggleClass('arrow-right');
        });

        var $postContent = $('.post-content');
        $postContent.fitVids();

        $('.scroll-down').arctic_scroll();

        $('.menu-button, .nav-cover, .nav-close').on('click', function(e){
            e.preventDefault();
            $('body').toggleClass('nav-opened nav-closed');
        });

        if ($('span[data-realDate]')[0]) {

            var realDate = $('span[data-realDate]')[0].innerHTML;
            $('.post-title').append('<span class="real-date">'+realDate+'</span>');
        }

        if(window.innerWidth < 1000) {
            $('.special-ads').remove();
        }

        if(window.innerWidth > 1000) {
           $('.regular-ads').remove();
        }
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
