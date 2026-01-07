
import './style.css'
import { app, analytics } from './firebase.js'; // Initialize Firebase
import './vto/index.js' // Virtual Try-On Module


// Hero Title Mouse Tracking Effect
const highlightText = document.querySelector('.hero-title');

if (highlightText) {
  highlightText.addEventListener('mousemove', (e) => {
    const rect = highlightText.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    highlightText.style.setProperty('--x', `${x}%`);
    highlightText.style.setProperty('--y', `${y}%`);
  });
}

// Header Scroll Effect
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

console.log('Óptica S&V Landing Page Loaded');

// Testimonials Slider
const track = document.querySelector('.testimonial-track');
const dots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;
const totalSlides = dots.length;

function updateSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

// Dot Click Events
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    updateSlide(index);
    resetInterval();
  });
});

// Auto Play
let slideInterval = setInterval(() => {
  let nextIndex = (currentIndex + 1) % totalSlides;
  updateSlide(nextIndex);
}, 5000);

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalSlides;
    updateSlide(nextIndex);
  }, 5000);
}

// Mobile Menu
const mobileToggle = document.querySelector('.mobile-toggle');
const navMobile = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.overlay');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
  });
}

// Scroll Reveal
// Scroll Reveal
// Automatically select major blocks + manual .reveal ones
const revealElements = document.querySelectorAll('.reveal, .section-title, .value-card, .service-card, .testimonial-card, .hero-content');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active'); // Remove class when out of view to re-trigger
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(el => {
  el.classList.add('reveal'); // Ensure class exists if we selected by tag
  revealObserver.observe(el);
});
