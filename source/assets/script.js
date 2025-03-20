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
    window.location.href = "https://simbiosesocial-fronthml.simbi.social/contato-site/f224bff9-5f49-402e-aee8-7662c52bf18b";
});

document.getElementById("inscreverIniciativa").addEventListener("click", function(){
    window.location.href = "https://simbiosesocial-fronthml.simbi.social/contato-site/f224bff9-5f49-402e-aee8-7662c52bf18b";
});

document.getElementById("teoria").addEventListener("click", function(){
    window.location.href = "https://drive.google.com/file/d/10mpMJkBYNGCuWhquE65T2SocpI4fYjkS/view";
});