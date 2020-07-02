const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

const init = () => {
    const swup = new Swup();

};

init();

// Adjust navigation class depend on window width
window.addEventListener('resize', () => {
    if (innerWidth > 1025) {
        mainNav.classList.remove('show');
        menuBtn.classList.remove('close');
    };
})

// Show/hide navigation menu
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    menuBtn.classList.toggle('close');
});

document.addEventListener('swup:contentReplaced', init);