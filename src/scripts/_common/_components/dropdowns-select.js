/*
.select-dropdown
    .select-dropdown__current
    .select-dropdown__dropdown
        .select-dropdown__options
            .select-dropdown__item(data-value="12")
                span Все для баскетбола
            .select-dropdown__item(data-value="22")
                span Все для футбола
            .select-dropdown__item(data-value="23")
                span Все для всего

*/


(function( $ ){

    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'showPlaceholder'     : false,
                'placeholder'         : 'Выберите из списка',
                'onChange'            : function() {}
            }, options);
            var selectID = 0;

            return this.each(function() {
                var select = $(this);
                select.attr('data-value','0');
                select.attr('data-id',selectID);
                var selectDropdown = select.find('.select-dropdown__dropdown');
                var currentVal = select.find('.select-dropdown__current');
                var selectPlaceholder = settings.placeholder;
                var selectOptions = select.find('.select-dropdown__options .select-dropdown__item');
                var dropdown = select.find('.select-dropdown__dropdown');
                var selectWidth = dropdown.width() + 1;
                selectID++;

                $(document).ready(function () {
                    if(settings.showPlaceholder){
                        currentVal.html('<div class="select-dropdown__item"><span>'+selectPlaceholder+'</span></div>');
                        currentVal.attr('data-select-value', '');
                        select.attr('data-value','');
                        select.css('width',selectWidth).addClass('is-loaded');
                        select.trigger('change');
                    }else if (selectOptions.length > 0){
                        var clone = selectOptions.eq(0).clone();
                        currentVal.empty().html(clone);
                        selectOptions.eq(0).addClass('is-active');
                        select.attr('data-value',clone.data('value'));
                        select.css('width',selectWidth).addClass('is-loaded');
                        select.trigger('change');
                    } else {
                        currentVal.html('<div class="select-dropdown__item"><span>Выберите из списка</span></div>');
                        currentVal.attr('data-select-value', '');
                        select.attr('data-value','');
                        select.css('width',selectWidth).addClass('is-loaded');
                        select.trigger('change');
                    }
                });
                select.find('.select-dropdown__current').on('click',function () {
                    if(dropdown.is(':visible')){
                        select.removeClass('is-opened');
                        dropdown.stop().fadeOut();
                    }else{
                        select.addClass('is-opened');
                        dropdown.stop().fadeIn();
                    }
                });
                selectOptions.on('click',function () {
                    var option = $(this);
                    var clone = option.clone();
                    currentVal.empty().html(clone);
                    select.attr('data-value',clone.data('value'));
                    option.addClass('is-active');
                    option.siblings('.select-dropdown__item').removeClass('is-active');
                    select.removeClass('is-opened');
                    dropdown.stop().fadeOut();
                    select.trigger('change');
                });
                $(window).on('click',function (event) {
                    select.each(function () {
                        select.removeClass('is-opened').find('.select-dropdown__dropdown').stop().fadeOut();
                    });
                });
                select.on('click',function (event) {
                    event.stopPropagation();
                    $('.select-dropdown').not($(this)).removeClass('is-opened').find('.select-dropdown__dropdown').stop().fadeOut();
                }).on('change',function () {
                    var data = {
                        'val'   : select.attr('data-value'),
                        'id'    : select.attr('data-id')
                    };
                    settings.onChange(data)
                });

            });

        },
        set : function(  ) {

        },
        get : function(  ) {
            return this.each(function() {
                console.log( $(this).attr('data-value'));
            });
        }
    };

    $.fn.selectDropdown = function( method ) {
        // логика вызова метода
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует ' );
        }
    };
})( $ );


$('.select-dropdown').selectDropdown({
    'onChange': function (data) {
        console.log(data.val)
    }
});

