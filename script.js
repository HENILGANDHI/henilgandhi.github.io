// // Dynamic text effect for Cybersecurity Engineer (as in RaifKaya.nl)
// document.addEventListener('DOMContentLoaded', function() {
//     const textElement = document.querySelector('.hero-right h2');
//     const phrases = ['Student', 'Cybersecurity Engineer', 'Penetration Tester', 'Ethical Hacker'];
//     let index = 0;
  
//     setInterval(function() {
//       textElement.textContent = phrases[index]; 
//       index = (index + 1) % phrases.length;
//     }, 2000); // Change every 2 seconds
//   });
  


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//Mobile responsive
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Animate elements when they come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

const titles = [
  "Cybersecurity Engineer",
  "Web Security Researcher",
  "Bug Bounty Hunter",
  "Ethical Hacker",
  "CTF Player",
  "InfoSec Enthusiast"
];

let i = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // typing speed
const pause = 300; // pause at end of each word

const typeEffect = () => {
  const titleElement = document.getElementById("dynamic-title");
  const currentTitle = titles[i];
  
  if (isDeleting) {
    titleElement.textContent = currentTitle.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      i = (i + 1) % titles.length;
    }
  } else {
    titleElement.textContent = currentTitle.substring(0, charIndex++);
    if (charIndex > currentTitle.length) {
      isDeleting = true;
      setTimeout(typeEffect, pause);
      return;
    }
  }
  setTimeout(typeEffect, speed);
};

document.addEventListener("DOMContentLoaded", typeEffect);
