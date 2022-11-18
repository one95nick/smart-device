const callbackModal = document.querySelector('.modal');
const callbackModalOpenButton = document.querySelector('.button--callback');
const callbackModalCloseButton = document.querySelector('.modal__close');
const footerMenu = document.querySelector('.footer__menu');
const footerToggle = document.querySelector('.footer__toggle');

callbackModalOpenButton.addEventListener('click', () => callbackModal.classList.add('is-active'));
callbackModalCloseButton.addEventListener('click', () => callbackModal.classList.remove('is-active'));
footerToggle.addEventListener('click', () => footerMenu.classList.toggle('is-active'));
