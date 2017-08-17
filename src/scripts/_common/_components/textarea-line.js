$('.js-textarea').each(function () {
    var field = $(this);
    field.attr('rows', '1');
    autosize(field);

    if (Modernizr.csspointerevents) {
        field.wrap('<div class="textarea-container"></div>');
        var helper = field.clone().attr('class','textarea-helper').css('height','40px').css('visibility','hidden');
        var container = field.closest('.textarea-container');
        container.append('<div class="textarea-line-active"></div>');
        var fieldActive = container.find('.textarea-line-active');
        fieldActive.on('click', function () {
            field.focus();
        });


        field.on('focus', function () {
            helper.css('width',field.width());
            $('body').append(helper);
            autosize(helper);
            autosize.update(helper);
            fieldActive.css('display', 'block');

        }).on('focusout',function () {
            if(!$.trim(helper.val()).length) {
                fieldActive.css('height','0px').css('display','none');
            }else{
                fieldActive.css('display', 'block');
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
