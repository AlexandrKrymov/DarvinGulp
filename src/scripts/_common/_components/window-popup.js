$('.js-popup').click(function(e){
    var btn = $(this);
    var overlay = $('#js-window-overlay');
    var target = $(btn.attr('href'));
    if(target.length){
        $('body').css('overflow','hidden');
        target.addClass('is-active').fadeIn();
        overlay.fadeIn();
        e.stopPropagation();
        e.preventDefault();
    }
});
function windowCloseInit() {
   $('body').on('click',function( event ) {
        var popup = $('.window.is-active');
       	var overlay = $('#js-window-overlay');
        overlay.fadeOut();
        popup.fadeOut().removeClass('is-active');
        $('body').css('overflow','');
    });
	 $('.window__close').on('click',function( event ) {
	        var popup = $('.window.is-active');
	       	var overlay = $('#js-window-overlay');	        
            overlay.fadeOut();
            popup.fadeOut().removeClass('is-active');
            $('body').css('overflow','');
             event.preventDefault();
	    });
    $('.window .window__body').on('click',function( event ) {
        event.stopPropagation();
    });
}    

$(document).ready(function (event) {
    windowCloseInit(event);
});
$(document).ajaxComplete(function (event) {
    windowCloseInit(event)
});
