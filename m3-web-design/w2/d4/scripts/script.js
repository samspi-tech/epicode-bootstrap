'use strict';

// 1. Collapse each section individually
const collapseButton = document.querySelectorAll('ion-icon');
const sectionContent = document.querySelectorAll('.collapse-section');

collapseButton.forEach(btn => {
    const dataButton = btn.getAttribute('data-button');

    btn.addEventListener('click', () => {
        sectionContent.forEach(content => {
            const dataSection = content.getAttribute('data-section');

            dataSection === dataButton && content.classList.toggle('hidden');
        });
    });
});

// 2. Show how many trips are available
const totalTrips = [];
const jumbotron = document.querySelector('.jumbotron');
const locations = document.querySelectorAll('.trip img');

locations.forEach(location => {
    const totalLocation = location.getAttribute('alt');
    totalTrips.push(totalLocation);
});

const tripsContainer = document.createElement('div');
tripsContainer.classList.add('container', 'fw-bolder');
tripsContainer.innerHTML = `There is a total of ${totalTrips.length} trips available right now.`;

jumbotron.after(tripsContainer);

// 3. Modal
