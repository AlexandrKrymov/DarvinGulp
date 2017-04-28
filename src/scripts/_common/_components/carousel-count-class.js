/*
 * example
 * div.carousel.carousel_3(data-dots="false")
 *
 * */
$('.carousel').each(function () {
    var carousel = $(this);
    var carouselLength = '';
    var dots = true;
    var nav = true;

    if(carousel.data('dots') == false){
        dots = false
    }
    if(carousel.data('nav') == false){
        dots = false
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
            loop:false,
            nav:nav,
            margin:20,
            dots:dots,
            autoplay:false,
            onInitialized:function () {
                carousel.find('.owl-item').addClass('element');
            }
        });
    }

});
