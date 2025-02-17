const swiper = new Swiper('.swiper-hero', {
    speed: 1500,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
});

const swiperMoviesSelection = new Swiper('.swiper-movies-selection', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
