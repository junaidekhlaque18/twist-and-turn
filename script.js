// =========================
// Countdown Timer
// =========================

const targetDate = new Date("July 4, 2026 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {

    if (!countdown) return;

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "Competition Started!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);


// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = "✖";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML = "☰";

        });

    });

}
