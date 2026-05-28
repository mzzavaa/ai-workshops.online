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

  // ── Luxury Parallax — lerp-based scroll depth ─────────────────
  //
  // How it works:
  //   scrollTarget  = actual scroll position (updated on scroll event)
  //   scrollCurrent = smoothed position (lerp'd toward target each frame)
  //   --scroll CSS variable = scrollCurrent in px
  //
  // The lerp factor (0.065) means the background closes ~6.5% of the
  // remaining distance each frame at 60fps. This gives the background
  // physical "weight" — it lags behind slightly and coasts to rest,
  // which is the defining characteristic of premium parallax.
  //
  // Each CSS orb reads --scroll at a different multiplier and direction,
  // creating depth perception from a single shared variable.
  //
  // The rAF loop only runs while there is meaningful movement
  // (> 0.12px gap), so it is zero-cost when the page is idle.
  // ──────────────────────────────────────────────────────────────

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    var LERP        = 0.065;   // 6.5% chase per frame — silky, physical feel
    var THRESHOLD   = 0.12;    // stop loop when within this many px
    var scrollTarget  = 0;
    var scrollCurrent = 0;
    var rafId         = null;

    function lerpTick() {
      // Lerp current toward target
      scrollCurrent += (scrollTarget - scrollCurrent) * LERP;

      // Write to CSS custom property (px value so calc() is clean)
      document.documentElement.style.setProperty(
        '--scroll',
        scrollCurrent.toFixed(2) + 'px'
      );

      if (Math.abs(scrollTarget - scrollCurrent) > THRESHOLD) {
        // Still moving — keep the loop alive
        rafId = requestAnimationFrame(lerpTick);
      } else {
        // Converged — snap to exact value and stop the loop
        document.documentElement.style.setProperty('--scroll', scrollTarget + 'px');
        rafId = null;
      }
    }

    window.addEventListener('scroll', function () {
      scrollTarget = window.scrollY;
      // Kick off the rAF loop only if it isn't already running
      if (!rafId) {
        rafId = requestAnimationFrame(lerpTick);
      }
    }, { passive: true });

    // Set initial value (page may already be scrolled on load)
    document.documentElement.style.setProperty('--scroll', window.scrollY + 'px');
  }

});
