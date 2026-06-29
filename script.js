// ==========================
// Countdown Timer
// ==========================

const countdown = document.getElementById("countdown");

const targetDate = new Date("July 4, 2026 00:00:00").getTime();

function updateCountdown() {

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

    countdown.innerHTML = `
        <div class="time-box">
            <div class="time-number">${days}</div>
            <div class="time-text">Days</div>
        </div>

        <div class="time-box">
            <div class="time-number">${hours}</div>
            <div class="time-text">Hours</div>
        </div>

        <div class="time-box">
            <div class="time-number">${minutes}</div>
            <div class="time-text">Minutes</div>
        </div>

        <div class="time-box">
            <div class="time-number">${seconds}</div>
            <div class="time-text">Seconds</div>
        </div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================
// Mobile Menu
// ==========================

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

}
// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
