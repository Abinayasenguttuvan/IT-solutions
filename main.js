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



const texts = [
  { el: "type-small", text: "HOW WE WORK", delay: 80 },
  { el: "type-line1", text: "How we can assist", delay: 70 },
  { el: "type-line2", text: "your business", delay: 70 }
];

function typeText({ el, text, delay }, callback){
  const element = document.getElementById(el);
  element.classList.add("type-cursor");
  let index = 0;

  const interval = setInterval(() => {
    element.textContent += text[index];
    index++;

    if(index === text.length){
      clearInterval(interval);
      element.classList.remove("type-cursor");
      if(callback) setTimeout(callback, 400);
    }
  }, delay);
}

typeText(texts[0], () => {
  typeText(texts[1], () => {
    typeText(texts[2]);
  });
});


const imgBox = document.querySelector('.jobs-image');
const img = imgBox.querySelector('img');
const glass = imgBox.querySelector('.magnifier');

imgBox.addEventListener('mousemove', (e) => {
  const rect = imgBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  glass.style.opacity = 1;
  glass.style.left = (x - 80) + 'px';
  glass.style.top = (y - 80) + 'px';

  glass.style.backgroundImage = `url(${img.src})`;
  glass.style.backgroundPosition = `-${x}px -${y}px`;
});

imgBox.addEventListener('mouseleave', () => {
  glass.style.opacity = 0;
});






