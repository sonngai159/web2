/* ===== SCRIPT SLICK SLIDER  WHERE 2 RIDE ===== */

$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    arrows:false,
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
    ]
});

/* ===== SCRIPT SLICK SLIDER  CUSTOMER SAID ===== */

$('.customer__carousel').slick({
    dots: true,
    infinite: false,
    speed: 1500,
    arrows:false,
    slidesToShow: 4,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToScroll: 1,
    infinite:true,
    responsive: [
        {
        breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
    ]
});
			
