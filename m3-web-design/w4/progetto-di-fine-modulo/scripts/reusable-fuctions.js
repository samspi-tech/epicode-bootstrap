const addMovieArray = (array, container) => {
    array.forEach(card => {
        container.innerHTML += `<div class="swiper-slide slide">
              <div class="movie-card rounded-3">
                <div class="movie-card-image position-relative">
                  <img class="card-img rounded-3"
                    data-src="${card.img}"
                    alt="${card.alt}">
                  <ion-icon
                    class="volume-icon fs-1 text-secondary border border-2 border-secondary rounded-circle p-3 position-absolute opacity-0"
                    name="volume-mute-outline"></ion-icon>
                </div>
                <div class="movie-card-text rounded-bottom-3 d-flex flex-column justify-content-between gap-4 p-4">
                  <div class="card-buttons d-flex justify-content-between">
                    <div class="d-flex gap-2">
                      <ion-icon class="fs-1 play-icon bg-white border rounded-circle p-3" name="play"></ion-icon>
                      <div class="add-icon position-relative">
                        <ion-icon class="fs-1 text-white border border-2 border-secondary rounded-circle p-3"
                          name="add"></ion-icon>
                        <p class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">
                          Add to My List
                        </p>
                      </div>
                      <div class="card-thumb position-relative">
                        <ion-icon class="fs-1 text-white border border-2 border-secondary rounded-circle p-3"
                          name="thumbs-up-outline" data-card-thumb="${card.alt}"></ion-icon>
                        <div
                          class="thumbs-container position-absolute bg-dark gap-4 d-flex justify-content-center rounded-pill px-4 py-3">
                          <div class="hidden-thumbs-up hidden-thumb position-relative">
                            <ion-icon class="fs-2 text-white rounded-circle p-2" name="thumbs-up-outline" data-hidden-thumb="${card.alt}"></ion-icon>
                            <p class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">
                              I like this
                            </p>
                          </div>
                          <div class="hidden-thumbs-down hidden-thumb position-relative">
                            <ion-icon class="fs-2 text-white rounded-circle p-2"
                              name="thumbs-down-outline" data-hidden-thumb="${card.alt}"></ion-icon>
                            <p class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">
                              Not for me
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="chevron-down-icon position-relative">
                      <ion-icon class="fs-1 text-white border border-2 border-secondary rounded-circle p-3"
                        name="chevron-down-outline"></ion-icon>
                      <p class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">
                        More info
                      </p>
                    </div>
                  </div>
                  <div class="card-info">
                    <p class="text-white-50 mb-0"><span class="maturity-number text-white border px-1 me-2">${card.maturityRating}</span>
                      ${card.seasonLength}
                      <span class="player-feature-badge text-white border px-1 ms-2">${card.playerFeatureBadge}</span>
                    </p>
                  </div>
                  <div class="card-genres">
                    <ul class="list-unstyled fw-medium text-white d-flex flex-wrap">
                      <li>${card.genresOne}</li>
                      <li>${card.genresTwo}</li>
                      <li>${card.genresThree}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`;
    });
};

const toggleClass = (element, CSSClass) => {
    return element.classList.toggle(CSSClass);
};

const addClass = (element, CSSClass) => {
    return element.classList.add(CSSClass);
};

const removeClass = (element, CSSClass) => {
    return element.classList.remove(CSSClass);
};

const observeElement = (observer, elements) => {
    elements.forEach(element => {
        observer.observe(element);
    });
};
