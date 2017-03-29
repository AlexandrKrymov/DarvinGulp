$('input,textarea').on('change',function () {
    if(!$.trim(this.value).length) {
        $(this).removeClass('changed')
    }else{
        $(this).addClass('changed')
    }
});




$(window).load(function(){
    svg4everybody();
});