$('.carousel').each(function () {
    var carousel = $(this);
    var carouselLength = '';
    var dots = true;
    var nav = true;
    var loop = true;
    var margin = 0;
    var autoplay = false;

    if(carousel.data('margin') !== null){
        margin = carousel.data('margin');
    }
    if(carousel.data('dots') == false){
        dots = false
    }
    if(carousel.data('autoplay') == true){
        autoplay = false
    }
    if(carousel.data('nav') == false){
        dots = false
    }
    if(carousel.data('loop') == false){
        loop = false
    }
    $.each(carousel.attr('class').split(/\s+/), function(i, name) {
        if (name.indexOf('carousel_') > -1) {
            carouselLength = name.match(/\d+/)[0];
            return false;
        }
    });
    if(carousel.find('.carousel__item').length > carouselLength){
        if(carousel.hasClass('be-photoswipe-gallery')){
            carousel.find('.element').removeClass('element');
        }
        carousel.addClass("owl-carousel").owlCarousel({
            items:carouselLength,
            loop:loop,
            nav:nav,
            margin:margin,
            dots:dots,
            autoplay:autoplay,
            onInitialized:function () {
                carousel.find('.owl-item').addClass('element');
            }
        });
    }

});
