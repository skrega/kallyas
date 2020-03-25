$(function(){

    $('.slider__items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1, 
        responsive: [{
                breakpoint: 750,
                settings: {
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 5000
                }
            },
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    new WOW().init();
});