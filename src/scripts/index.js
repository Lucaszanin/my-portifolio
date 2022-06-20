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
    origin: 'left',
    distance: '150px',
});


sr.reveal('.img-home', {
    rotate: { x: 0, y: 90, z: 0 },
    duration: 2000
});

sr.reveal('.imagem-sobre-mim', {
    rotate: { x: 100, y: 100, z: 0 },
    duration: 2000
});

sr.reveal('.informacoes-sobre-mim', {
    origin: 'rigth',
    distance: '150px',
    duration: 2000
});

sr.reveal('.section-title', {
    origin: 'top',
    distance: '50px',
    duration: 2000
});       

sr.reveal('.container-habilidades', {
    origin: 'rigth',
    distance: '150px',
    duration: 2000
});

sr.reveal('.container-projetos', {
    origin: 'rigth',
    distance: '150px',
    duration: 2000
});

