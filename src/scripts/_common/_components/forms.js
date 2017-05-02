$('input,textarea').on('change',function () {
    if(!$.trim(this.value).length) {
        $(this).removeClass('is-changed');
        $(this).val('');
    }else{
        $(this).addClass('is-changed');
    }
});
autosize($('.js-textarea'));
