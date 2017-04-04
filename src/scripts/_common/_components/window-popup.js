$('.js-popup').click(function(e){
    var btn = $(this);
    var overlay = $('#window-overlay');
    var target = $(btn.attr('href'));
    if(target.length){
        $('#window-overlay').addClass('is-active');
        $('body').addClass('window-opened');
        target.addClass('is-active').fadeIn();
        overlay.fadeIn();
        e.preventDefault();
    }
});

$('.window .window__body').on('click',function(e){
    e.stopPropagation();
});
$('.window').on('click',function(e){
    var overlay = $('#window-overlay');
    $(this).removeClass('is-active').fadeOut();
    $('body').removeClass('window-opened');
    overlay.fadeOut();
});
$('.window .window__close').on('click',function(e){
    var overlay = $('#window-overlay');
    var window = $(this).closest('.window');
    window.removeClass('is-active').fadeOut();
    $('body').removeClass('window-opened');
    overlay.fadeOut();
});