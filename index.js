console.log('index.js')

const btnUpArrow = document.getElementById('up-arrow')
btnUpArrow.addEventListener('click', (event) => {

    event.preventDefault()

    document.documentElement.scrollTop = 0
})

// scroll reveal
ScrollReveal({

    reset: true,
    distance: '80px',
    duration: '2000',
    delay: '200'

})
ScrollReveal().reveal('.my-intro', { origin: 'top' });
ScrollReveal().reveal('.my-img', { origin: 'bottom' });
ScrollReveal().reveal('.logo-img', { origin: 'left' });
ScrollReveal().reveal('.vertical-line', { origin: 'top' });
ScrollReveal().reveal('.project-description', { origin: 'right' });
ScrollReveal().reveal('.my-img-2', { origin: 'bottom' });
ScrollReveal().reveal('.my-contact', { origin: 'top' });
ScrollReveal().reveal('.my-footer', { origin: 'left' });
ScrollReveal().reveal('.my-scroll-btn', { origin: 'right' });

// type.js
var typed = new Typed('#role', {
    strings: ['Backend Developer', 'Graphic Designer','Data Science Enthusiasts.'],
    typeSpeed: 50,
    startDelay: 500,
    showCursor: false,
    loop: true,
    loopCount: Infinity,
});
