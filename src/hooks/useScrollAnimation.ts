import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('visible');
          
          // Handle individual delay if defined
          const delay = target.getAttribute('data-delay');
          if (delay) {
            target.style.transitionDelay = `${delay}s`;
          }

          // Handle staggering for children if defined on this element
          const stagger = target.getAttribute('data-stagger');
          if (stagger) {
            const children = Array.from(target.children);
            children.forEach((child, index) => {
              (child as HTMLElement).style.transitionDelay = `${(index + 1) * parseFloat(stagger)}s`;
              child.classList.add('visible');
            });
          }
          
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.will-animate, .line-reveal, .fade-up, .translate-x-left, .translate-x-right, .card-reveal, .staff-reveal, .nav-slide-down');
    elements.forEach((el) => observer.observe(el));

    // Safety fallback: if elements are still not visible after 800ms, force them visible
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          el.classList.add('visible');
        }
      });
    }, 800);

    return () => {
      clearTimeout(timer);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
