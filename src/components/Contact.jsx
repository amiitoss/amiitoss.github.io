import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="container">
        {/* Glow accent */}
        <div className="contact__glow" aria-hidden="true" />

        <div className="contact__inner">
          <span className="section-label fade-up" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="section-title fade-up fade-up-delay-1" style={{ textAlign: 'center' }}>
            Let's Work Together
          </h2>
          <p className="contact__body fade-up fade-up-delay-2">
            I'm actively looking for new opportunities. Whether it's a full-time role,
            freelance project, or just a chat — my inbox is always open.
          </p>

          {/* Contact cards */}
          <div className="contact__cards fade-up fade-up-delay-2">
            {/* Email */}
            <div className="contact__card glass-card">
              <div className="contact__card-icon">
                <MailIcon />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">Email</div>
                <div className="contact__card-value">{personalInfo.email}</div>
              </div>
              <button
                className="contact__copy-btn"
                onClick={copyEmail}
                id="contact-copy-email"
                aria-label="Copy email to clipboard"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass-card contact__card--link"
              id="contact-linkedin"
            >
              <div className="contact__card-icon contact__card-icon--linkedin">
                <LinkedInIcon />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">LinkedIn</div>
                <div className="contact__card-value">amit-malagoudanavar</div>
              </div>
              <span className="contact__arrow">↗</span>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card glass-card contact__card--link"
              id="contact-github"
            >
              <div className="contact__card-icon contact__card-icon--github">
                <GitHubIcon />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">GitHub</div>
                <div className="contact__card-value">github.com/amiitoss</div>
              </div>
              <span className="contact__arrow">↗</span>
            </a>
          </div>

          {/* CTA */}
          <div className="contact__cta fade-up fade-up-delay-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary contact__email-btn"
              id="contact-send-email"
            >
              <MailIcon /> Send Me an Email
            </a>
            <p className="contact__response">
              I typically respond within 24 hours ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>;
}

function CopyIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>;
}
