$('input,textarea').on('change',function () {
    if(!$.trim(this.value).length) {
        $(this).removeClass('changed')
    }else{
        $(this).addClass('changed')
    }
});
autosize($('.js-textarea'));