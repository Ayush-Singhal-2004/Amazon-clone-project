const navSignIn = document.getElementById("nav-signin");
navSignIn.addEventListener("mouseenter", () => {
    document.getElementById("signIn-popUp-id").style.display = "inline";
    document.getElementById("content-cover-bg-id").style.height = "100vh";
});
const signUpPopUpBox = document.getElementById("signIn-popUp-id");
signUpPopUpBox.addEventListener("mouseleave", () => {
    signUpPopUpBox.style.display = "none";
    document.getElementById("content-cover-bg-id").style.height = 0;
});

//swiper.js ...
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

document.getElementById("back-to-top-btn-id").addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});