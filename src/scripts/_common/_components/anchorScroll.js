$('.js-anchor-scroll').on('click', function(e){
    e.preventDefault();
    if($($.attr(this, 'href') ).length){
		$('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
    }
});