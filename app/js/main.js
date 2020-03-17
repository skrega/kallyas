$(function(){

    $('.slider__items').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

});