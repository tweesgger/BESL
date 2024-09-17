'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionAbout = document.querySelector('#about');
const btnSend = document.querySelector('.btn');
const modalName = document.querySelector('.name');
const modalEmail = document.querySelector('.email');
const modalMsg = document.querySelector('.text');


// Open modal
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Close modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Open modal on click
btnsOpenModal.addEventListener('click', openModal);


// Close modal on click or escape key
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Scroll to About section on button click
btnScrollTo.addEventListener('click', function () {
    sectionAbout.scrollIntoView({ behavior: 'smooth' });
});

btnSend.addEventListener('click',function(e){
    closeModal();
});