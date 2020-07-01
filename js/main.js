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


    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    new WOW().init();
});