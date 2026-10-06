
//Home
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


hamburger.onclick = () => {
    navLinks.classList.toggle("open");


    // Hamburger animation
    hamburger.classList.toggle("active");
};





//Services
// Stagger Animation on Load
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
});


// Dark / Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");


toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});

//List type servies
// Scroll reveal animation
const sections = document.querySelectorAll('.container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});
