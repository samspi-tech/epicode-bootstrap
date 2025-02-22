// Swiper Sections
const swiperRecommended = new Swiper('.swiper-recommended', {
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            touchRatio: 0,
        },
    },
});

const swiperPopular = new Swiper('.swiper-popular', {
    navigation: {
        nextEl: '.popular-button-next',
        prevEl: '.popular-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            touchRatio: 0,
        },
    },
});

const swiperTrending = new Swiper('.swiper-trending', {
    navigation: {
        nextEl: '.trending-button-next',
        prevEl: '.trending-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            touchRatio: 0,
        },
    },
});

// Observer for sections
const carousels = document.querySelectorAll('.carousel-cards');

const observeElement = (list, observer) => {
    list.forEach(element => {
        observer.observe(element);
    });
};

const carouselObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('opacity-show', entry.isIntersecting);

            if (entry.isIntersecting) {
                carouselObserver.unobserve(entry.target);
            }
        });
    },
    {
        root: null,
        threshold: 0.2,
    }
);

observeElement(carousels, carouselObserver);

// Observer for images
const lazyImages = document.querySelectorAll('[data-src]');

const lazyLoadingObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                observer.unobserve(img);
            }
        });
    },
    {
        root: null, // contenitore da guardare (null guarda tutto)
        threshold: 0, // a che punto del contenitore far partire il comando (0-1)
    }
);

observeElement(lazyImages, lazyLoadingObserver);

// Delay Hero Content Visualization
const jumboText = document.querySelector('.jumbo-text');
const jumboImage = document.querySelector('.jumbo-img');

const addClass = (element, className) => {
    return element.classList.add(className);
};

const showHiddenContent = () => {
    addClass(jumboText, 'show-jumbo-content');
    addClass(jumboImage, 'show-jumbo-content');
};

document.addEventListener('DOMContentLoaded', showHiddenContent);
