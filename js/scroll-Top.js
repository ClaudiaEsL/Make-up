$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.buttonUp').fadeIn(); 
        } else { 
            $('.buttonUp').fadeOut();
        }
    });
    $('.buttonUp').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});