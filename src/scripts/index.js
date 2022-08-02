const buttonTop = document.getElementById('backToTopButton')
window.sr = ScrollReveal({ reset: true });

window.addEventListener('scroll', () => {
    buttonTop.classList.add('show')
    if (scrollY < 350) {
        buttonTop.classList.remove('show')
    }
})

buttonTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


sr.reveal('.texto-home', {
    duration: 3000,
    origin: 'top',
    distance: '150px',
});


sr.reveal('.img-home', {
    rotate: { x: 90, y: 90, z: 0 },
    duration: 2000
});

sr.reveal('.imagem-sobre-mim', {
    rotate: { x: 100, y: 100, z: 0 },
    duration: 2000
});

sr.reveal('.informacoes-sobre-mim', {
    origin: 'bottom',
    distance: '150px',
    duration: 2000
});

sr.reveal('.section-title', {
    origin: 'top',
    distance: '150px',
    duration: 2000
});

sr.reveal('.container-habilidades', {
    origin: 'bottom',
    distance: '150px',
    duration: 2000
});

sr.reveal('.container-projetos', {
    origin: 'top',
    distance: '150px',
    duration: 2000
});


$('.carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});