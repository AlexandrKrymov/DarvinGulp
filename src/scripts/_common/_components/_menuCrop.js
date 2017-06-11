function menuResponse(menuWrapper,helperWrapper,breakpoint) {
    var nav = $(menuWrapper);
    var navHelper = $(helperWrapper);
    var menuCropped = navHelper.find('.menu-cropped').find('ul').first();



    function menuResponseInit() {
        menuCropped.empty();

        if (navHelper.width() >= 0){
            var navWidth = nav.width()-navHelper.width();
        }else{
            navWidth = nav.width();
        }
        var calculatedWidth = 0;
        var itemLast = null;
        if($(window).width() > breakpoint){
            nav.find('ul').first().children('li').each(function () {
                var item = $(this);
                calculatedWidth = calculatedWidth + item.outerWidth();
                item.removeClass('is-last');


                if(calculatedWidth > navWidth){
                    item.addClass('is-cropped');

                    if(itemLast == null){
                        var calculatedWidthNew = calculatedWidth - item.outerWidth();

                        nav.find('ul').first().children('li').eq(item.index()-1).addClass('is-last');
                        calculatedWidthNew = calculatedWidthNew + item.outerWidth();

                        if(calculatedWidthNew > navWidth){
                            if(itemLast == null){
                                nav.addClass('nav_cropped');
                                itemLast = item.index()-1;
                                item.addClass('is-cropped').removeClass('is-last');
                            }
                        }else{
                            itemLast = item.index();
                            item.removeClass('is-cropped');
                            calculatedWidth = calculatedWidthNew;
                        }
                    }
                }else{
                    item.removeClass('is-cropped');
                    nav.removeClass('nav_cropped');

                }
                if(item.is('.is-cropped')){
                    item.clone().appendTo(menuCropped);
                }
            });
        }else{
            nav.removeClass('nav_cropped');
            nav.find('ul').first().children('li').each(function () {
                $(this).removeClass('is-last is-cropped');
            })
        }
        nav.addClass('nav_cropped-loaded');
    }
    var resizeTimer;

    $(window).on('load',function () {
        menuResponseInit();
    }).on('resize',function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            menuResponseInit();
        }, 500);
    });

    navHelper.find('.menu-burger').on('click',function (e) {
        var toggle = $(this);
        var menu = toggle.next().first();
        if(menu.is(':visible')){
            toggle.removeClass('is-active');
            menu.fadeOut();
        }else{
            toggle.addClass('is-active');
            menu.fadeIn();
        }
        event.preventDefault();
    });

    $(window).on('click',function (event) {
        if(!(event.target == navHelper || navHelper.find(event.target).length > 0)){
            navHelper.find('.menu-burger').removeClass('is-active');
            navHelper.find('.menu-burger').next().first().fadeOut();
        }
    });
}
menuResponse('#js-menu-crop','#js-menu-crop__helper', 768);
