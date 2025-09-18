// Animacje przy wczytaniu strony
document.addEventListener("DOMContentLoaded", () => {
    const fadeEls = document.querySelectorAll(".fade-in");
    fadeEls.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.3}s`;
        el.classList.add("fade-in");
    });

    const slideEls = document.querySelectorAll(".slide-in");
    slideEls.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.3 + 0.3}s`;
        el.classList.add("slide-in");
    });
});
