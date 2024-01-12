const navSignIn = document.getElementById("nav-signin");
navSignIn.addEventListener("mouseenter", () => {
    document.getElementById("signIn-popUp-id").style.opacity = 1;
});
navSignIn.addEventListener("mouseleave", () => {
    document.getElementById("signIn-popUp-id").style.opacity = 0;
});