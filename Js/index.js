// JavaScript DOM Elements //
const button = document.getElementById('button');

// Changing Window Locate On Ckick //
button.addEventListener('click' , (event) => {
    window.location = "/index.html" ;
});

anime({
    targets: '.button',
    width: '27rem',
    height: '6rem',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
});