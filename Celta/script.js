
// mobile toggle
const menu = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".toggle-btn");
const cancelBtn = document.querySelector(".cancel-btn");
toggleBtn.onclick = () => {
    menu.classList.add("mobile-active");
}
cancelBtn.onclick = () => {
    menu.classList.remove("mobile-active")
}


// owl-carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    dot:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// scroll animation Aos
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })
});