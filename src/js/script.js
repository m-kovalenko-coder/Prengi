$(document).ready(function(){
    $('.promo__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="6" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M5.68 10.02a.46.46 0 0 1-.62 0L.12 5.4a.39.39 0 0 1 0-.58L5.06.22a.46.46 0 0 1 .62 0c.17.16.17.42 0 .57L1.04 5.12l4.64 4.32a.4.4 0 0 1 0 .58z" fill="#fff"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="6" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M5.68 10.02a.46.46 0 0 1-.62 0L.12 5.4a.39.39 0 0 1 0-.58L5.06.22a.46.46 0 0 1 .62 0c.17.16.17.42 0 .57L1.04 5.12l4.64 4.32a.4.4 0 0 1 0 .58z" fill="#fff"/></svg></button>'
    });
    $('.solution__slider').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="60"><path fill="#00c2f0" d="M17.5.3c.5.2.6.8.4 1.3l-16 27.8v.1l16 28.1a1 1 0 0 1-.4 1.4 1 1 0 0 1-1.4-.4l-16-28a1 1 0 0 1 0-1.1 1 1 0 0 1 0-1.1L16.1.6a1 1 0 0 1 1.4-.3z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="60"><path fill="#00c2f0" d="M17.5.3c.5.2.6.8.4 1.3l-16 27.8v.1l16 28.1a1 1 0 0 1-.4 1.4 1 1 0 0 1-1.4-.4l-16-28a1 1 0 0 1 0-1.1 1 1 0 0 1 0-1.1L16.1.6a1 1 0 0 1 1.4-.3z"/></svg></button>'    });
});
