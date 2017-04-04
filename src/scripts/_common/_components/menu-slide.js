$('.js-menu-toggle').on('click',function (e) {
    var menu = $('#menu-main');
    if(menu.is(':visible')){
        $(this).removeClass('is-active');
        menu.stop().slideUp().promise().done(function () {
            menu.find('.dropdown-menu').slideUp()
        });

    }else{
        $(this).addClass('is-active');
        menu.stop().slideDown();
    }
    e.preventDefault();
});

$('.js-menu-main a').on('click',function (e) {
    var target = $(this);
    var other = target.closest('li').siblings('li').find('.dropdown-menu');
    var dropdown = target.next('.dropdown-menu').first();
    if($(window).width() <=768){

        if(dropdown.length){

            if(dropdown.is(':visible')){
                dropdown.stop().slideUp();
            }else{
                dropdown.stop().slideDown();
                other.slideUp();

            }


            e.preventDefault();
        }

    }

});
function jsMenuReset() {
    $('#menu-main').attr('style','').find('.dropdown-menu').attr('style','');
}