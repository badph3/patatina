// Cinematic opening + reading-like motion.
const revealItems = document.querySelectorAll('.reveal');
const heroVisual = document.querySelector('.hero-visual');
const introLogo = document.querySelector('.intro-logo');
const motionFrames = document.querySelectorAll('.motion-frame');
const supportsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const completeIntro = () => {
  document.body.classList.add('intro-complete');
  window.setTimeout(() => {
    document.body.classList.remove('intro-active');
    introLogo?.remove();
  }, supportsReducedMotion ? 0 : 900);
};

if (introLogo) {
  if (supportsReducedMotion) {
    completeIntro();
  } else {
    window.setTimeout(completeIntro, 1000);
  }
}

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
    const scrollY = window.scrollY;

    if (heroVisual) {
      const heroOffset = Math.min(scrollY * -0.08, 0);
      heroVisual.style.setProperty('--parallax-offset', `${heroOffset}px`);
    }

    motionFrames.forEach((frame) => {
      const speed = Number(frame.dataset.speed || 0.05);
      const offset = Math.max(-40, Math.min(75, scrollY * speed));
      frame.style.setProperty('--motion-offset', `${offset}px`);
    });

    ticking = false;
  };

  onScroll();

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
