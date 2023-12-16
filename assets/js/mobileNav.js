const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuContent = document.querySelector('.hamburger-menu i');
const navLinks = document.querySelector('.nav-links');

document.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        changeIcon();
      });
});

function changeIcon() {
    if (hamburgerMenuContent.classList.contains("fa-bars")) {
        hamburgerMenuContent.classList.remove("fa-bars");
        hamburgerMenuContent.classList.add("fa-times");
    } else {
        hamburgerMenuContent.classList.add("fa-bars");
        hamburgerMenuContent.classList.remove("fa-times");
    }
}