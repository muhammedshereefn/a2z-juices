
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== GSAP ANIMATION ===============*/
TweenMax.from('.home__title',1, {delay: .2, opacity:0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description',1, {delay: .3, opacity:0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button',1, {delay: .4, opacity:0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__liquid',1, {delay: .7, opacity:0, y: 200, ease: Expo.easeInOut})
TweenMax.from('.home__juice-animate',1, {delay: 1.2, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__apple1',1, {delay: 1.5, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__apple2',1, {delay: 1.6, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(1)',2, {delay: 1.3, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(2)',2, {delay: 1.4, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(3)',2, {delay: 1.5, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(4)',2, {delay: 1.6, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(5)',2, {delay: 1.7, opacity:0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(6)',2, {delay: 1.8, opacity:0, y: -800, ease: Expo.easeInOut})

// Select the elements for About Modal
const aboutLink = document.querySelector('.nav__link[href="#about"]');
const aboutModal = document.getElementById('about-modal');
const closeAboutModal = document.getElementById('close-modal');

// Show About modal when clicking "About"
aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    aboutModal.classList.add('show');
    // GSAP animation: fade in and move up the modal
    gsap.to(aboutModal.querySelector('.modal-content'), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Hide About modal when clicking the close button
closeAboutModal.addEventListener('click', function () {
    gsap.to(aboutModal.querySelector('.modal-content'), {
        opacity: 0,
        y: 100,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => aboutModal.classList.remove('show') // Remove modal after animation
    });
});

// Optionally, close About modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === aboutModal) {
        gsap.to(aboutModal.querySelector('.modal-content'), {
            opacity: 0,
            y: 100,
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => aboutModal.classList.remove('show') // Remove modal after animation
        });
    }
});

// Select the elements for Contact Modal
const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const closeContactModal = document.getElementById('close-contact-modal');

// Show the Contact modal when the contact link is clicked
contactLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    contactModal.classList.add('show'); // Show modal with class
    // GSAP animation: fade in and move up the modal
    gsap.to(contactModal.querySelector('.modal-content'), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Close the Contact modal when the close button is clicked
closeContactModal.addEventListener('click', function () {
    gsap.to(contactModal.querySelector('.modal-content'), {
        opacity: 0,
        y: 100,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => contactModal.classList.remove('show') // Remove modal after animation
    });
});

// Close the Contact modal when clicking outside of the modal content
window.addEventListener('click', function (event) {
    if (event.target === contactModal) {
        gsap.to(contactModal.querySelector('.modal-content'), {
            opacity: 0,
            y: 100,
            duration: 0.6,
            ease: 'power2.in',
            onComplete: () => contactModal.classList.remove('show') // Remove modal after animation
        });
    }
});

// Show the Contact modal when the Details button is clicked
document.querySelector('.home__button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    contactModal.classList.add('show'); // Show modal with class
    // GSAP animation: fade in and move up the modal
    gsap.to(contactModal.querySelector('.modal-content'), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});




