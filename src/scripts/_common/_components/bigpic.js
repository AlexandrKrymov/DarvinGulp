$('.bigpic').each(function(e){
    var link = $(this).closest('a');
    if(link.length > 0){
        link.on('click',function (e) {
            return hs.expand(this);
        });
    }
});