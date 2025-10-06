document.addEventListener("DOMContentLoaded", function () {

    let mainStagesSwiper = new Swiper(".mainStagesSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            1800: {
                slidesPerView: 6,
                spaceBetween: 30,
            }
        }
    });

    if (document.getElementById('is-admin')) {
        console.log('addSwiper.js finish work');
    }
});