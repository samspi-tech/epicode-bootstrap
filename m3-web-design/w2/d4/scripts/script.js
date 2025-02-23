'use strict';

// 1. Collapse each section individually
const chevronIcon = document.querySelectorAll('.section-arrow');
const sectionContent = document.querySelectorAll('.collapse-section');

chevronIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        // switch icon
        const attributeValue =
            icon.getAttribute('name') === 'chevron-down'
                ? 'chevron-up'
                : 'chevron-down';

        icon.setAttribute('name', attributeValue);

        // hide content
        const dataButton = icon.getAttribute('data-button');
        sectionContent.forEach(content => {
            const dataSection = content.getAttribute('data-section');

            dataSection === dataButton && content.classList.toggle('hidden');
        });
    });
});

// 2. Show how many trips are available
const totalTrips = [];
const jumbotron = document.querySelector('header');
const locations = document.querySelectorAll('.trip img');

locations.forEach(location => {
    const totalLocation = location.getAttribute('alt');
    totalTrips.push(totalLocation);
});

const tripsContainer = document.createElement('div');
tripsContainer.classList.add('container', 'modal-overlay', 'py-3');

tripsContainer.innerHTML = `<div class="row">
                              <div class="col d-flex align-items-center gap-2">
                                <ion-icon class="fs-4 text-white bg-info p-2 rounded-circle" name="trail-sign-outline"></ion-icon>
                                <p class="mb-0 mt-1 fw-bolder">There is a total of ${totalTrips.length} trips available   right now.</p>
                              </div>
                            </div>`;

jumbotron.after(tripsContainer);

// 3. Modal
const footer = document.querySelector('footer');
const modal = document.createElement('div');
modal.classList.add(
    'container-fluid',
    'd-none',
    'modal-container',
    'd-flex',
    'justify-content-center',
    'position-fixed'
);

modal.innerHTML = ` <div class="position-relative">
      <div class="row custom-modal bg-black p-4 p-md-5 rounded-3 shadow-lg">
        <div class="col">
          <p class="text-capitalize text-white fs-3">subscribe to our newsletter!</p>
          <div class="d-flex align-items-center gap-2">
            <input class="p-2 rounded w-100" type="email" id="email" placeholder="email">
            <ion-icon class="subscribe-btn bg-white fs-4 rounded p-2" name="arrow-forward"></ion-icon>
          </div>
        </div>
      </div>
      <ion-icon class="modal-icon text-white fs-2 fw-bolder position-absolute" name="close-outline"></ion-icon>
    </div>`;

footer.after(modal);

// 4. Show Modal
const contactUsButton = document.querySelector('.contact-btn');
const customModal = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.modal-icon');
const modalOveraly = document.querySelectorAll('.modal-overlay');
const modalInput = document.querySelector('.custom-modal input');
const subscribeButton = document.querySelector('.subscribe-btn');

const addClass = (element, CSSClass) => {
    return element.classList.add(CSSClass);
};

const removeClass = (element, CSSClass) => {
    return element.classList.remove(CSSClass);
};

const openModal = () => {
    removeClass(customModal, 'd-none');
    modalOveraly.forEach(overlay => {
        addClass(overlay, 'blur-bg');
    });
};

const closeModal = () => {
    modalInput.value = '';
    addClass(customModal, 'd-none');
    modalOveraly.forEach(overlay => {
        removeClass(overlay, 'blur-bg');
    });
};

contactUsButton.addEventListener('click', openModal);
subscribeButton.addEventListener('click', closeModal);
closeModalButton.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
    e.key === 'Enter' && closeModal();
});

//  5. Remove Cards
const cards = document.querySelectorAll('.card');
const removeCardsButton = document.querySelector('.remove-cards-btn');

const createChaos = () => {
    cards.forEach(card => {
        card.remove();
    });
};

removeCardsButton.addEventListener('click', createChaos);
