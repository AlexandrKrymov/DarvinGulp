$('.js-img-background').each(function(){
    $(this).css('opacity', '0').css('background-image', 'url(' + $(this).find('img').attr('src') + ')' ).find('img').css('opacity', '0' ).css('visibility','hidden');
    $(this).css('opacity', '');
});