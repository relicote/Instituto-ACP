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

document.getElementById("inscreverProjeto").addEventListener("click", function(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSerulCSQ45Y1j3HIZi7KbUVcvP9Oqakv7drF_iekeKGSzFzEw/viewform";
});

document.getElementById("inscreverIniciativa").addEventListener("click", function(){
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSerulCSQ45Y1j3HIZi7KbUVcvP9Oqakv7drF_iekeKGSzFzEw/viewform";
});