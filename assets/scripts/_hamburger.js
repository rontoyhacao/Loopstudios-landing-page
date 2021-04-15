const hamburger = document.querySelectorAll('.hamburger-btn');
const hamburgerNav = document.querySelector('.nav-links');

hamburger.forEach(toggler => {
    toggler.addEventListener('click', () => {
        hamburgerNav.classList.toggle('open');
    });
});