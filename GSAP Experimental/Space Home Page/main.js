/*==================================== Show Menu ====================================*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')

/*===== menu show =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== menu hidden =====*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================================== Remove Menu Mobile ====================================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================================== GSAP Animation ====================================*/
gsap.from('.home__points', 1.5, 
{   opacity:0,
    y: -300,
    delay: .2
})

gsap.from('.home__rocket', 1.5, {
    ease: Power3.easeInOut,
    opacity:0,
    y: 300,
    delay: .3
})

gsap.from('.home__planet-1', 1.5, {
    ease: Power3.easeInOut,
    opacity: 0,
    x: -200,
    delay: .4
})

gsap.from('.home__planet-2', 1.5, {
    ease: Power3.easeInOut,
    opacity: 0,
    x: 200,
    delay: .6
})

gsap.from('.home__cloud-1', 1.5, {
    ease: Power3.easeInOut,
    opacity: 0,
    y: 200,
    delay: .4
})

gsap.from('.home__cloud-2', 1.5, {
    ease: Power3.easeInOut,
    opacity: 0,
    y: 200,
    delay: .6
})

gsap.from('.home__content', 1.5, {
    ease: Power3.easeInOut,
    opacity: 0,
    y: -100,
    delay: .3
})





