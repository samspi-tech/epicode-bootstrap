const swiperTrending = new Swiper('.trending-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1880: {
            slidesPerView: 6,
            spaceBetween: 10,
            touchRatio: 0,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperWatchAgain = new Swiper('.watch-again-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1880: {
            slidesPerView: 6,
            spaceBetween: 10,
            touchRatio: 0,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperNewReleases = new Swiper('.new-releases-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1880: {
            slidesPerView: 6,
            spaceBetween: 10,
            touchRatio: 0,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Add Movies
const trendingContainer = document.querySelector(
    '.trending-swiper .swiper-wrapper'
);
const watchAgainContainer = document.querySelector(
    '.watch-again-swiper .swiper-wrapper'
);
const newReleasesContainer = document.querySelector(
    '.new-releases-swiper .swiper-wrapper'
);

addMovieArray(trending, trendingContainer);
addMovieArray(watchAgain, watchAgainContainer);
addMovieArray(newReleases, newReleasesContainer);

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyImageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            const image = entry.target;

            if (entry.isIntersecting) {
                image.src = image.getAttribute('data-src');
                observer.unobserve(image);
            }
        });
    },
    {
        root: null,
        threshold: 0,
    }
);

observeElement(lazyImageObserver, lazyImages);

// Observe Sections
const section = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addClass(entry.target, 'show-section');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        root: null,
        threshold: 0.4,
    }
);

observeElement(sectionObserver, section);

// Like or Dislike Movie
const cardThumbButtons = document.querySelectorAll('.card-thumb > ion-icon');
const hiddenThumbButtons = document.querySelectorAll('.hidden-thumb ion-icon');

hiddenThumbButtons.forEach(hiddenThumb => {
    hiddenThumb.addEventListener('click', () => {
        const hiddenThumbName = hiddenThumb.getAttribute('name');
        const hiddenThumbMovieTitle =
            hiddenThumb.getAttribute('data-hidden-thumb');

        cardThumbButtons.forEach(cardThumb => {
            const thumbCardTitle = cardThumb.getAttribute('data-card-thumb');

            hiddenThumbMovieTitle === thumbCardTitle &&
                cardThumb.setAttribute('name', hiddenThumbName);
        });
    });
});

// Show Search Bar
const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-bar input');

const searchBarVisibility = e => {
    const isTargetSearchIcon = e.target === searchIcon;
    const isTargetOutsideSearchBar =
        e.target !== searchBar &&
        e.target !== searchIcon &&
        e.target !== searchInput;

    if (isTargetSearchIcon) {
        toggleClass(searchBar, 'show-search-bar');
        toggleClass(searchInput, 'visually-hidden');
    } else if (isTargetOutsideSearchBar) {
        addClass(searchInput, 'visually-hidden');
        removeClass(searchBar, 'show-search-bar');
    }
};

document.addEventListener('click', searchBarVisibility);

// Show Genres Dropdown Menu
const genresMenu = document.querySelector('.genres-menu');
const genresButton = document.querySelector('.genres-button');

const genresMenuVisibility = e => {
    const isTargetGenresMenu = e.target === genresButton;
    const isTargetOutsideGenresMenu = e.target !== genresButton;

    if (isTargetGenresMenu) {
        toggleClass(genresMenu, 'visually-hidden');
        toggleClass(genresButton, 'genres-clicked-background');
    } else if (isTargetOutsideGenresMenu) {
        addClass(genresMenu, 'visually-hidden');
        removeClass(genresButton, 'genres-clicked-background');
    }
};

document.addEventListener('click', genresMenuVisibility);

// Toggle Background to Bottom Row Nav on Scroll
const bottomRowNav = document.querySelector('.bottom-row-nav');

const toggleBottomNavBackground = () => {
    const isScrollZero = window.scrollY === 0;

    if (isScrollZero) {
        addClass(bottomRowNav, 'bottom-row-transparent');
        removeClass(bottomRowNav, 'bottom-row-black-bg');
    } else {
        addClass(bottomRowNav, 'bottom-row-black-bg');
        removeClass(bottomRowNav, 'bottom-row-transparent');
    }
};

window.addEventListener('scroll', toggleBottomNavBackground);
