
(function( $ ){
    var selectID = 0;
    var methods = {
        init : function( options ) {

            var settings = $.extend( {
                'showPlaceholder'     : false,
                'placeholder'         : 'Выберите из списка',
                'onChange'            : function() {}
            }, options);
            

            return this.each(function() {
                var select = $(this);
                select.removeAttr('data-value');
                select.attr('data-id',selectID);
                var selectDropdown = select.find('.select-dropdown__dropdown');
                var currentVal = select.find('.select-dropdown__current');
                var selectPlaceholder = settings.placeholder;
                var selectOptions = select.find('.select-dropdown__options .select-dropdown__item');
                var dropdown = select.find('.select-dropdown__dropdown');
                var selectWidth = dropdown.width() + 1;

                selectID++;

                if(!select.is('.is-loaded')){
                    if(settings.showPlaceholder){
                        currentVal.html('<div class="select-dropdown__placeholder"><span>'+selectPlaceholder+'</span></div>');
                        if(select.find('.select-dropdown__placeholder').width() > selectWidth){
                            selectWidth = Math.ceil(select.find('.select-dropdown__placeholder').width())
                        }
                        select.css('min-width',selectWidth).addClass('is-loaded');
                        select.trigger('change');
                    }else if (selectOptions.length > 0){
                        var clone = selectOptions.eq(0).clone();
                        currentVal.empty().html(clone);
                        selectOptions.eq(0).addClass('is-active');
                        select.attr('data-value',clone.data('value'));
                        select.css('min-width',selectWidth).addClass('is-loaded');
                        select.trigger('change');
                    } else {
                        currentVal.html('<div class="select-dropdown__item"><span>Список пуст</span></div>');
                        currentVal.attr('data-select-value', '');
                        select.attr('data-value',null);
                        select.css('min-width',selectWidth).addClass('is-loaded');
                        select.trigger('change');
                    }
                }

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
                        'select' : select,
                        'val'    : select.attr('data-value'),
                        'id'     : select.attr('data-id')
                    };
                    settings.onChange(data)
                });

                $(document).ready(function () {
                    select.trigger('change');
                });


            });

        },
        set : function( val ) {
            var select = $(this);
            var item = select.find('.select-dropdown__options .select-dropdown__item[data-value="'+val+'"]');
            if(item.length > 0){
                var currentVal = select.find('.select-dropdown__current');
                var clone = item.clone();
                currentVal.empty().html(clone);
                item.addClass('is-active').siblings('.select-dropdown__item').removeClass('is-active');
                select.attr('data-value',val);
                select.trigger('change');
            }

        },
        get : function(  ) {
            return $(this).attr('data-value');
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

$('#js-equipment-search-cat').selectDropdown({
        'showPlaceholder'     : true,
        'placeholder'         : 'Выберите категорию',
        'onChange': function (data) {
            console.log('ID категории = '+data.val);
            console.log(data.select);
            if(data.val){
               
            }else{
                
            }
        }
    });
$('#js-equipment-search-cat').selectDropdown('set','3');
$('#js-equipment-search-cat').selectDropdown('get');
