$('.js-anchor-scroll').on('click', function(e){
    
    if($($.attr(this, 'href') ).length){
        $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
    e.preventDefault();
    return false;
    }
});
