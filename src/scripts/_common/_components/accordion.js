$('.js-accordion').each(function (e) {
    var container = $(this);
    var btn = container.find('.accordion__btn');
    var content = container.find('.accordion__content');

    btn.on('click',function (e) {
        if(content.is(':hidden')){
           content.stop().addClass('is-active').slideDown();
           btn.addClass('is-active');
        }else {
           content.stop().removeClass('is-active').slideUp();
            btn.removeClass('is-active');
        }
        e.preventDefault();
    })

});

function accordionReset() {
    $('.js-accordion').each(function (e) {
        var container = $(this);
        var btn = container.find('.accordion__btn');
        var content = container.find('.accordion__content');

        btn.removeClass('is-active');
        content.removeClass('is-active').css('display','');
    });
}