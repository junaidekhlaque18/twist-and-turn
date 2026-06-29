const targetDate = new Date("July 4, 2026 00:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {

        clearInterval(timer);

        document.getElementById("countdown").innerHTML =
            "Competition Started!";

    }
    const menuBtn=document.getElementById("menuBtn");

const navLinks=document.getElementById("navLinks");

menuBtn.onclick=function(){

navLinks.classList.toggle("active");

}

}, 1000);
