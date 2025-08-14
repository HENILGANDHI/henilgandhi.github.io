document.addEventListener("DOMContentLoaded", function () {
  // ✅ Remove .no-js fallback class
  document.documentElement.classList.remove("no-js");

const heroImg = document.querySelector('.hero-img');

heroImg.addEventListener('mousemove', (e) => {
  const rect = heroImg.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  heroImg.style.setProperty('--x', `${x}%`);
  heroImg.style.setProperty('--y', `${y}%`);
});



  // ✅ Animate sections when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });

  // ✅ Show hero section immediately on load
  const hero = document.getElementById("home");
  if (hero) {
    hero.classList.add("animate");
  }

  // ✅ Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ✅ Mobile navbar toggle
  window.toggleMenu = function () {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  };


  // ✅ Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Save preference
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if nothing is saved
    if (savedTheme === "dark" || !savedTheme) {
      document.body.classList.add("dark-mode");
    }
  }
});
