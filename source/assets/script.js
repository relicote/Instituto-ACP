const elements = [
    '.nav-bar-content',
    '.header-content',
    '.about-content',
    '.cards-content',
    '.button-content',
    '.open-call-content-left',
    '.open-call-content-right',
    '.for-who-content',
    '.how-to-content',
    '.about-simbi-content-left',
    '.about-simbi-content-right',
    '.footer-content'
];

elements.forEach(selector => {
    ScrollReveal().reveal(selector, { delay: 100, origin: 'bottom', distance: '50px', duration: 1000 });
});
