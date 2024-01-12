const navSignIn = document.getElementById("nav-signin");
navSignIn.addEventListener("mouseenter", () => {
    document.getElementById("signIn-popUp-id").style.opacity = 1;
});
const a = document.getElementById("signIn-popUp-id");
a.addEventListener("mouseleave", () => {
    a.style.opacity = 0;
});