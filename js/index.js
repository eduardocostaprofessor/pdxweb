
$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade:false,
    slidesToShow: 1,
    slidesToScroll: 1,
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

const viewer = new Viewer(document.getElementById('images'),{

})