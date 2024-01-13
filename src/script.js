const navSignIn = document.getElementById("nav-signin");
navSignIn.addEventListener("mouseenter", () => {
    document.getElementById("signIn-popUp-id").style.opacity = 1;
    document.getElementById("content-cover-bg-id").style.height = "100vh";
});
const signUpPopUpBox = document.getElementById("signIn-popUp-id");
signUpPopUpBox.addEventListener("mouseleave", () => {
    signUpPopUpBox.style.opacity = 0;
    document.getElementById("content-cover-bg-id").style.height = 0;
});

//swiper.js ...
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});