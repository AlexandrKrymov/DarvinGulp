
$('#js-btn-scroll-top').on('click', function () {
    $("body:not(:animated)").animate({ scrollTop: 0 }, 500);
    $("html").animate({ scrollTop: 0 }, 500);
    return false;
});

$(window).on('load scroll', function(){
    if ($(this).scrollTop()>200 && true ){
        $('#js-btn-scroll-top').addClass('is-active');
    } else {
        $('#js-btn-scroll-top').removeClass('is-active');
    }
});
