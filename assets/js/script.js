$(function() {

	 
    $(window).scroll(function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 200) {
            $(".bg").css('opacity', '0.5'); //*Transparente
        }         
    });

    $('li a').on({
    	mouseenter: function(){
    		$(this).removeClass('gray');
    	},
    	mouseleave: function(){
    		$(this).addClass('gray');
    	}});




  
});
