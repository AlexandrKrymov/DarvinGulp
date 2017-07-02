$('.js-popup').click(function(e){
    var btn = $(this);
    var overlay = $('#js-window-overlay');
    var target = $(btn.attr('href'));
    if(target.length){
        $('body').addClass('window-opened');
        target.addClass('is-active').fadeIn();
        overlay.fadeIn();
        e.preventDefault();
    }
});

$('.window').on('click',function( event ) {
    var popup = $('.window.is-active');
    var overlay = $('#js-window-overlay');
    if(event.target == $('.window__close')
        || event.target.closest('.window__close')
        || !(event.target.closest('.window__body'))
        || event.target == overlay
    ){
        overlay.fadeOut();
        popup.fadeOut().removeClass('is-active');
    }
});
