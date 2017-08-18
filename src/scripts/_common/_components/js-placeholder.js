function placeholder(selector) {

    $(selector).each(function () {
        var input = $(this);
        $('<div class="input-placeholder"><span class="input-placeholder__title">' + input.attr("placeholder") + '</span></div>').insertBefore(input);
        var placeholder = input.prev('.input-placeholder');
        input.on('focus',function (event) {
            placeholder.addClass('is-focused');
        });
        input.on('blur',function (event) {
            placeholder.removeClass('is-focused');
        });
    });

};

