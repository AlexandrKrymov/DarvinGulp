/*
* табы
**/

$('.tabs-js').each(function (e) {
    var container = $(this);

    $(window).on('load',function () {

        var activeTab = container.find('.tabs-nav .tabs-nav__link').first();

        if(container.find('.tabs-nav .tabs-nav__link.is-active').length > 0){
            activeTab = container.find('.tabs-nav .tabs-nav__link.is-active');
        }
        var target = activeTab.attr('href');
        var other = container.find('.tabs-nav .tabs-nav__link').not(activeTab);

        other.each(function () {
            $(this).removeClass('is-active');
            $($(this).attr('href')).hide();
        }).promise().done(function () {
            activeTab.addClass('is-active');
            $(target).fadeIn();
        });
    });

    container.find('.tabs-nav .tabs-nav__link').on('click',function (e) {
        var link = $(this);
        var target = link.attr('href');
        var other = container.find('.tabs-nav .tabs-nav__link').not(link);

        other.each(function () {
            $(this).removeClass('is-active');
            $($(this).attr('href')).hide();
        }).promise().done(function () {
            link.addClass('is-active');
            $(target).fadeIn();
        });

        e.preventDefault();
    });

});