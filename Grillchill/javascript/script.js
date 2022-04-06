   
//    mobile nav toggle
   const menu = document.querySelector(".nav-links");
            const toggleBtn = document.querySelector(".toggle-btn");
            const cancelBtn = document.querySelector(".cancel-btn");
            toggleBtn.onclick = () => {
                menu.classList.add("active");
            }
            cancelBtn.onclick = () => {
                menu.classList.remove("active")
            }
    



            // aos scroll animation
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        offset: 300,
        once: true,
        mirror: false
    })
});



            
            
