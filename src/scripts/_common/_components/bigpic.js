$('.bigpic').each(function(e){
    var img = $(this);
    var link = img.closest('a');
    var imgHeight = img.css('height');
    var imgWidth = img.css('width');

    img.wrap('<span class="bigpic-wrapper"></span>');
    var imgWrapper = img.closest('.bigpic-wrapper');
    imgWrapper.attr('style', img.attr('style'))
        .css('width','')
        .css('height','')
        .css('padding','')
        .css('padding-left','')
        .css('padding-right','')
        .css('padding-top','')
        .css('padding-bottom','');
    img.attr('style','')
        .css('height', imgHeight)
        .css('width', imgWidth);

    if(link.length > 0){
        link.on('click',function (e) {
            return hs.expand(this);
        });
    }

});
