document.addEventListener("DOMContentLoaded", () => {
    if (typeof Swiper !== "undefined") {
        new Swiper(".hero-swiper", {
            loop: true,
            effect: "fade",
            speed: 1200, // Make the transition much smoother (1.2 seconds)
            fadeEffect: {
                crossFade: true // Ensures clean fading without overlapping artifacts
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }
});
