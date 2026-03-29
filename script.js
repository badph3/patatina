// Soft reveal + subtle parallax to create a slow reading rhythm.
const revealItems = document.querySelectorAll('.reveal');
const heroVisual = document.querySelector('.hero-visual');
const supportsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!supportsReducedMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  revealItems.forEach((item) => io.observe(item));

  let ticking = false;
  const onScroll = () => {
    if (!heroVisual) return;

    const offset = Math.min(window.scrollY * -0.08, 0);
    heroVisual.style.setProperty('--parallax-offset', `${offset}px`);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
} else {
  // Respect accessibility preference by showing all content immediately.
  revealItems.forEach((item) => item.classList.add('in-view'));
}
