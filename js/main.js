function scrollDisable(){
    $('body').addClass('noscroll').on('scroll touchmove mousewheel', function(e){
        // e.preventDefault();
        window.addEventListener("touchstart", {passive: false} );
    });
}

function scrollAble(){
    $('body').removeClass('noscroll').off('scroll touchmove mousewheel');
    window.addEventListener("touchstart", {passive: true} );
}

function flexibleList() {
    var winWidth = $(window).width();
    if (winWidth <= 374) {
        $("h1").each(function(){
            $(this).find("img").prop("src", "img/lg.png");
        }); 
    } else {
        $("h1").each(function(){
            $(this).find("img").prop("src", "img/logo.png");
        }); 
    }
}


    
$(function () {
    // swiper main
    var swiper = new Swiper(".swiper_info", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // swiper event
    var swiper = new Swiper(".swiper_event", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // swiper partners
    var swiper = new Swiper(".swiper_partners", {
        // slidesPerView: 5,
        breakpoints: {
            769: {slidesPerView: 5},
            551: {slidesPerView: 3},
            376: {slidesPerView: 2},
            },
        spaceBetween: 14,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //family site
	$('.combobox').on('click', function() {
		if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('.fam_list').slideUp();
        } else {
            $(this).addClass('on');
            $('.fam_list').slideDown();
        }
    });
    $('.fam_list li').on('click', function() {
        $('.fam_list').slideUp();
        $('.combobox').removeClass('on');
    });
    $('.menu_bar').on('click', function() {
        $(this).toggleClass('on');
        $('header, .gnb_area').toggleClass('on');
        
        if ($(this).hasClass('on') == true) {
            scrollDisable();
        } else {
            scrollAble();
        }
    });
    //gnb
    $('.gnb_area').on('click', function() {
        $('header, .menu_bar, .gnb_area').removeClass('on');
        scrollAble();
    });
    
    // size
    flexibleList();
    $(window).resize(function() {
        flexibleList();
    });
});