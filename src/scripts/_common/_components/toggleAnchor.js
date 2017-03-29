/*
* показать скрыть по анкору
* */
$('js-anchor-toggle').each(function(e){
    var btn = $(this);
    var target = $(btn.attr("href"));

    btn.click(function(e){
       if(target.length > 0){
            if(target.is(':hidden')){
                target.slideDown().addClass('is-active');
                btn.addClass('is-active');
            }else{
                target.slideUp().removeClass('is-active');
                btn.removeClass('is-active');
            }
            e.preventDefault();
        } else{
            //no target
        }

    });
});