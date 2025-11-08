// ===== Page Load Animation =====
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// ===== Scroll Animation =====
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// ===== Scroll to Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Mobile Navbar Toggle =====
const navToggle = document.createElement("div");
navToggle.classList.add("nav-toggle");
navToggle.innerHTML = "☰";
document.querySelector(".navbar").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
  navToggle.classList.toggle("active");
});

document.getElementById("logo").addEventListener("click", function() {
  location.reload();
});