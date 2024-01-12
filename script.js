const navSignIn = document.getElementById("nav-signin");
navSignIn.addEventListener("mouseenter", () => {
    document.getElementById("signIn-popUp-id").style.opacity = 1;
});
const signUpPopUpBox = document.getElementById("signIn-popUp-id");
signUpPopUpBox.addEventListener("mouseleave", () => {
    signUpPopUpBox.style.opacity = 0;
});