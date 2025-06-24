// src/main.js

import './styles/style.scss';
import ScrollReveal from 'scrollreveal';

document.addEventListener('DOMContentLoaded', () => {
  // 🌙 Dark mode toggle based on time
  const hours = new Date().getHours();
  const night = hours >= 19 || hours <= 7;
  const body = document.body;
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle?.addEventListener('click', () => {
    if (input.checked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  // ⬆️ Scroll-to-top button
  const introHeight = document.querySelector('.intro')?.offsetHeight || 0;
  const topButton = document.getElementById('top-button');

  window.addEventListener('scroll', () => {
    if (window.scrollY > introHeight) {
      topButton?.classList.add('visible');
    } else {
      topButton?.classList.remove('visible');
    }
  });

  topButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 👋 Wave on load + hover
  const hand = document.querySelector('.emoji.wave-hand');

  if (hand) {
    const wave = () => {
      hand.classList.add('wave');
      setTimeout(() => hand.classList.remove('wave'), 2000);
    };

    setTimeout(wave, 1000);

    hand.addEventListener('mouseover', () => hand.classList.add('wave'));
    hand.addEventListener('mouseout', () => hand.classList.remove('wave'));
  }

  // 📜 Scroll reveal animations
  ScrollReveal().reveal('.background', {
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  ScrollReveal().reveal('.skills');
  ScrollReveal().reveal('.experience', { viewFactor: 0.2 });
  ScrollReveal().reveal('.featured-projects', { viewFactor: 0.1 });
  ScrollReveal().reveal('.other-projects', { viewFactor: 0.05 });
});
