$('.js-read-more').each(function () {
    var block = $(this);
    var btn =  block.find('.read-more__btn');
    btn.on('click',function (e) {

        if(block.find('.read-more__content').is(':hidden')){
            block.find('.read-more__content').stop().addClass('is-active').slideDown().promise().done(function () {
                btn.addClass('is-active').text('View less text');
            });

        }else {
            block.find('.read-more__content').stop().removeClass('is-active').slideUp().promise().done(function () {
                btn.removeClass('is-active').text('View full text');
            });

        }
        e.preventDefault();
    });
});
function readmoreReset() {
    $('.js-read-more').each(function () {
        var block = $(this);
        var btn =  block.find('.read-more__btn');
        btn.removeClass('is-active').text('View full text');
        block.find('.read-more__content').removeClass('is-active').css('display','');
    })
}