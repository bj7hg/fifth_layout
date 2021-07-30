$(function(){
    $('.slider').slick({
        slidesToShow:2,
        slidesToScroll:1,
        dots:true,
        arrows:false,
        Infinity:false,
        responsive: [
            {
                breakpoint: 877,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});