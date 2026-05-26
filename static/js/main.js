/* AI Workshops — main.js */

document.addEventListener('DOMContentLoaded', function () {

  // ── Theme toggle ──────────────────────────────────────────────
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var html = document.documentElement;
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // ── Mobile nav ────────────────────────────────────────────────
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Parallax Orbs — smooth scroll-driven depth ────────────────
  // Single scroll listener sets --scroll CSS variable.
  // Each orb reads it at a different multiplier in CSS.
  // Uses requestAnimationFrame for buttery-smooth 60fps.
  var ticking = false;
  var lastScrollY = 0;

  function updateParallax() {
    document.documentElement.style.setProperty('--scroll', lastScrollY);
    ticking = false;
  }

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  // Only enable parallax on devices that can handle it smoothly
  // (skip on mobile/touch devices for performance)
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!prefersReducedMotion && !isTouchDevice) {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize on load
    updateParallax();
  }

});
