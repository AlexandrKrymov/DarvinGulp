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
        if(event.target == $('.window__close')
            || event.target.closest('.window__close')
            || !(event.target.closest('.window__body'))
            || event.target == overlay
        ){
            overlay.fadeOut();
            popup.fadeOut().removeClass('is-active');
            $('body').css('overflow','');
        }
    });
}    

$(document).ready(function (event) {
    windowCloseInit(event);
});
$(document).ajaxComplete(function (event) {
    windowCloseInit(event)
});
