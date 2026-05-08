import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const targets = el.querySelectorAll('.fade-up');
    targets.forEach((t) => observer.observe(t));

    // Also observe the element itself if it has fade-up
    if (el.classList.contains('fade-up')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
