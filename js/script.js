$(document).ready(function(){
    // fixed nav
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });

    // scroll
    $('.btn_scroll').click(function(){
        $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    // swiper
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        touchRatio: 0.7,
        resistance: false,
      });

    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        thumbs: {
          swiper: galleryThumbs
        },
        simulateTouch: false,
        effect: 'fade',
        on: {
            slideChangeTransitionEnd: function (){
                video.get(0).pause();
            }
        }
    });
    // youtube
});