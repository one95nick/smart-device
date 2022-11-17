// модальное окно
const callbackModal = document.querySelector('.modal');
const callbackModalOpenButton = document.querySelector('.button--callback');
const callbackModalCloseButton = document.querySelector('.modal__close');



callbackModalOpenButton.addEventListener ('click', () => callbackModal.classList.add('is-active'));
callbackModalCloseButton.addEventListener ('click', () => callbackModal.classList.remove('is-active'));


// меню в футере
const footerMenu = document.querySelector('.footer__menu');
const footerToggle = document.querySelector('.footer__toggle');

footerToggle.addEventListener('click', () => footerMenu.classList.toggle('is-active'));
