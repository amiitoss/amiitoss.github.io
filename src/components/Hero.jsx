import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const TYPED_ROLES = [
  'Full-Stack Engineer',
  'React Developer',
  'FastAPI Specialist',
  'IoT Systems Builder',
  'Python Engineer',
];

export default function Hero() {
  const typedRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const current = TYPED_ROLES[roleIndex];
      if (!typedRef.current) return;

      if (isDeleting) {
        typedRef.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
      } else {
        typedRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 50 : 80;

      if (!isDeleting && charIndex === current.length) {
        delay = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % TYPED_ROLES.length;
        delay = 300;
      }

      timeoutId = setTimeout(type, delay);
    }

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  // Floating particles
  useEffect(() => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas id="hero-canvas" className="hero__canvas" aria-hidden="true" />

      {/* Ambient blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge fade-up visible">
          <span className="hero__badge-dot" />
          Available for new opportunities
        </div>

        <h1 className="hero__name fade-up visible">
          Hi, I'm <span className="hero__name-highlight">Amit</span>
          <br />
          Malagoudanavar
        </h1>

        <div className="hero__role fade-up visible">
          <span className="hero__role-prefix">I'm a </span>
          <span className="hero__role-typed" ref={typedRef} />
          <span className="hero__cursor" ref={cursorRef}>|</span>
        </div>

        <p className="hero__tagline fade-up visible">
          {personalInfo.tagline}
        </p>

        <div className="hero__tech-row fade-up visible">
          {['React', 'FastAPI', 'Python', 'TypeScript', 'Docker', 'PostgreSQL'].map((tech) => (
            <span key={tech} className="hero__tech-chip">{tech}</span>
          ))}
        </div>

        <div className="hero__actions fade-up visible">
          <a href="#projects" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View My Work →
          </a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get In Touch
          </a>
        </div>

        <div className="hero__social fade-up visible">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub Profile">
            <GitHubIcon />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn Profile">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Send email">
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator fade-up visible" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
