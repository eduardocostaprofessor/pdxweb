$('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 1000,
    fade:false,
    slidesToShow: 1,
    slidesToScroll: 4,
    responsive:[
    {
        breakpoint: 1024,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 480,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
        }
    },

]
});