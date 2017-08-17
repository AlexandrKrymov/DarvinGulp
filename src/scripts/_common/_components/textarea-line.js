$('.js-textarea').each(function () {
    var field = $(this);
    //field.attr('rows', '1');
    autosize(field);

    if (Modernizr.csspointerevents) {
        field.wrap('<div class="textarea-container" style="display: block;position: relative"></div>');
        var helper = field.clone().attr('rows', '1').css('position','fixed').css('min-height',0).css('height', field.css('line-height'));
        var container = field.closest('.textarea-container');
        container.append('<div class="textarea-helper" style="position:absolute;left:0;top:0;width:100%;pointer-events: none;display:none;height:'+field.css('line-height')+'"></div>');
        var fieldActive = container.find('.textarea-helper');

        fieldActive.on('click', function () {
            field.focus();
        });

        field.on('focus mouseenter', function () {
            helper.css('width',field.width());
            $('body').append(helper);
            autosize(helper);
            autosize.update(helper);
            fieldActive.fadeIn(200);
        }).on('focusout mouseout',function () {
            if(!$.trim(helper.val()).length) {
                fieldActive.css('height',field.css("line-height")).fadeOut(200);
            }else{
                fieldActive.fadeIn(200);
            }
            helper.remove();
        }).on('input',function () {
            helper.val($(this).val());
            autosize.update(helper);
            fieldActive.css('height',helper.height());
        }).on('autosize:resized', function(){
            console.log('resized');
            autosize.update(helper);
            helper.css('height',field.height());
            fieldActive.css('height',helper.height());
        });
    }

});
