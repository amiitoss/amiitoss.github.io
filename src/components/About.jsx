import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const stats = [
  { value: '2.3+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '4+', label: 'Clients Served' },
  { value: '10+', label: 'Tech Stack' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Left: Text */}
          <div className="about__text">
            <span className="section-label fade-up">About Me</span>
            <h2 className="section-title fade-up fade-up-delay-1">
              Turning complex problems<br />into clean software
            </h2>
            <p className="about__body fade-up fade-up-delay-2">
              {personalInfo.summary}
            </p>
            <p className="about__body fade-up fade-up-delay-2">
              Whether it's building a <strong>real-time IoT diagnostics dashboard</strong> processing thousands of MQTT messages,
              architecting a <strong>collaborative whiteboard</strong> with WebSocket sync, or delivering a
              polished <strong>NextJS podcast platform</strong> — I care about every layer of the stack.
            </p>

            <div className="about__links fade-up fade-up-delay-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="about-github-link"
              >
                <GitHubIcon /> GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="about-linkedin-link"
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Stats + Info card */}
          <div className="about__right">
            <div className="about__card glass-card fade-up fade-up-delay-2">
              <div className="about__avatar">
                <span>AM</span>
                <div className="about__avatar-ring" />
              </div>

              <div className="about__info-rows">
                <div className="about__info-row">
                  <LocationIcon />
                  <span>Bangalore, India</span>
                </div>
                <div className="about__info-row">
                  <BriefcaseIcon />
                  <span>Open to Full-Time roles</span>
                </div>
                <div className="about__info-row">
                  <MailIcon />
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="about__status-badge">
                <span className="about__status-dot" />
                Actively looking for opportunities
              </div>
            </div>

            {/* Stats */}
            <div className="about__stats fade-up fade-up-delay-3">
              {stats.map((s) => (
                <div key={s.label} className="about__stat">
                  <div className="about__stat-value">{s.value}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}

function BriefcaseIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>;
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
