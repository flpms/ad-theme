(function ($, undefined) {
    "use strict";

    var $document = $(document);
    $document.ready(function () {
        var $postContent = $(".post-content");
		var newClass = 'main-nav-backdrop';
        $postContent.fitVids();
		
		if(!/(?:((\(ipad){1}|(\(iphone){1})\;\ CPU\ OS 9)/gi.test(navigator.userAgent)) {

			$('.main-nav').addClass('backdrop-fallback');
		}
		
    });
})(Zepto);
