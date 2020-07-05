const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');
const homeBtn = document.getElementById('home-btn');

const init = () => {
    const swup = new Swup();

    // Main navigation position swap
    if (window.location.href.includes('index')) {
        mainNav.classList.add('start');
        menuBtn.classList.add('hide');
        homeBtn.classList.add('hide');
    } else {
        mainNav.classList.remove('start');
        menuBtn.classList.remove('hide');
        homeBtn.classList.remove('hide');
    };
};

init();

// Event listeners:
// Show/hide navigation menu
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    menuBtn.classList.toggle('close');
});

document.addEventListener('swup:contentReplaced', init);