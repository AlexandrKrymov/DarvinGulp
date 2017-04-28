/*
 * div.carousel.carousel_3
 *
 * */
$('.carousel').each(function () {
    var carousel = $(this);
    var carouselLength = '';
    $.each(carousel.attr('class').split(/\s+/), function(i, name) {
        if (name.indexOf('carousel_') > -1) {
            carouselLength = name.match(/\d+/)[0];
            return false;
        }
    });
    if(carousel.find('.carousel__item').length > carouselLength){
        carousel.addClass("owl-carousel").owlCarousel({
            items:carouselLength,
            loop:true,
            nav:true,
            dots:true,
            autoplay:true,
            autoplayTimeout:50000,
            autoplayHoverPause:true
        });
    }

});

