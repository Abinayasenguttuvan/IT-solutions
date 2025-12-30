// TOGGLE MENU
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

// MOBILE DROPDOWN CLICK
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});






let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);





const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('video');

playBtn.addEventListener('click', () => {
  if(video.paused){
    video.play();
    playBtn.style.display = 'none';
  }
});

video.addEventListener('pause', () => {
  playBtn.style.display = 'block';
});




const panels = document.querySelectorAll('.scroll-panel');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        panels.forEach(p => p.classList.remove('active'));
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.6 }
);

panels.forEach(panel => observer.observe(panel));







