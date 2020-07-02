const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

const init = () => {
    const swup = new Swup();
};

// Show/hide navigation menu
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    menuBtn.classList.toggle('close');
});

init();

document.addEventListener('swup:contentReplaced', init);