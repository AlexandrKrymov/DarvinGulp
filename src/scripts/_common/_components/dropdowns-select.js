$('.js-dropdown-select').each(function () {
    var select = $(this);
    var selectDropdown = select.find('.dropdown-select__dropdown');
    var currentVal = select.find('.dropdown-select__current-val .dropdown-select__val');
    var selectPlaceholder = select.data('select-placeholder');
    var selectOptions = select.find('.dropdown-select__options .dropdown-select__val');

    if(selectPlaceholder){
        currentVal.text(selectPlaceholder);
        currentVal.attr('data-select-value', '');
    }else if (selectOptions.length > 0){
        var clone = selectOptions.eq(0).clone();
        currentVal.replaceWith(clone);
        currentVal = select.find('.dropdown-select__current-val .dropdown-select__val');
        selectOptions.eq(0).addClass('is-active');
    } else {
        currentVal.text("Choose option");
        currentVal.attr('data-select-value', '');
    }

       select.find('.dropdown-select__current-val').on('click','*',function(e) {
        if(select.is('.is-opened')){
            select.removeClass('is-opened');
        }else{
            select.addClass('is-opened');
        }

        if(event.target.closest('.dropdown-select__current-val')){
            return false;
        }

        e.stopPropagation();
    });

    selectOptions.on('click',function () {
       var option = $(this);
       var clone = option.clone();
       currentVal.replaceWith(clone);
       currentVal = select.find('.dropdown-select__current-val .dropdown-select__val');
       option.addClass('is-active');
       option.siblings('.dropdown-select__val').removeClass('is-active');
       select.removeClass('is-opened');
       select.trigger('change');
    });

  /*  if(selectOptions.length > 3) {
        selectOptions.closest('.dropdown-select__options ').mCustomScrollbar({
            axis:'y',
            mouseWheel:{
                enable: true
            },
            scrollbarPosition: 'inside',
            advanced:{ updateOnContentResize: true }
        });
    }*/

}).on('click',function (e) {
    e.stopPropagation();
    $('.dropdown-select-js').not($(this)).removeClass('is-opened');
}).on('change',function(){
    console.log(currentVal);
})
