import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './style.css';


// ======================================
// COPIAR CÓDIGO HEX
// ======================================

const colorCards = document.querySelectorAll('.color-card');

colorCards.forEach((card) => {

  card.addEventListener('click', () => {

    const color = card.dataset.color;

    navigator.clipboard.writeText(color);

    const text = card.querySelector('p');

    const originalText = text.textContent;

    text.textContent = '¡Copiado!';

    setTimeout(() => {

      text.textContent = originalText;

    }, 1200);

  });

});


// ======================================
// NAVBAR CON SCROLL
// ======================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {

    navbar.classList.add('navbar-scrolled');

  } else {

    navbar.classList.remove('navbar-scrolled');

  }

});


// ======================================
// ANIMACIÓN DE SECCIONES
// ======================================

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

      }

    });

  },

  {
    threshold: 0.15
  }

);


sections.forEach((section) => {

  observer.observe(section);

});


// ======================================
// AÑO AUTOMÁTICO
// ======================================

const yearElements =
  document.querySelectorAll('[data-year]');


yearElements.forEach((element) => {

  element.textContent =
    new Date().getFullYear();

});