import { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const ref = useScrollReveal();
  const [expandedRole, setExpandedRole] = useState(null);

  const toggleRole = (key) => setExpandedRole(expandedRole === key ? null : key);

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className="exp__header">
          <span className="section-label fade-up">Experience</span>
          <h2 className="section-title fade-up fade-up-delay-1">Work History</h2>
          <p className="section-subtitle fade-up fade-up-delay-2">
            2.3+ years shipping production software across web, IoT, and industrial automation
          </p>
        </div>

        <div className="exp__timeline fade-up fade-up-delay-2">
          {experiences.map((company, ci) => (
            <div key={ci} className="exp__company-block">
              {/* Company header */}
              <div className="exp__company-header">
                <div className="exp__company-dot" />
                <div className="exp__company-info">
                  <h3 className="exp__company-name">{company.company}</h3>
                  <span className="exp__company-period">{company.period}</span>
                </div>
              </div>

              {/* Roles */}
              <div className="exp__roles">
                {company.roles.map((role, ri) => {
                  const key = `${ci}-${ri}`;
                  const isOpen = expandedRole === key;

                  return (
                    <div
                      key={ri}
                      className={`exp__role glass-card ${isOpen ? 'exp__role--open' : ''}`}
                      id={`exp-role-${key}`}
                    >
                      <button
                        className="exp__role-header"
                        onClick={() => toggleRole(key)}
                        aria-expanded={isOpen}
                        aria-controls={`exp-body-${key}`}
                      >
                        <div className="exp__role-left">
                          <div className="exp__role-title">{role.title}</div>
                          <div className="exp__role-meta">
                            <span className="exp__role-client">
                              <ClientIcon /> {role.client}
                            </span>
                            <span className="exp__role-period">{role.period}</span>
                          </div>
                        </div>
                        <div className={`exp__chevron ${isOpen ? 'exp__chevron--open' : ''}`}>
                          <ChevronIcon />
                        </div>
                      </button>

                      {/* Tags */}
                      <div className="exp__tags">
                        {role.tags.map((tag) => (
                          <span key={tag} className="tag tag-purple">{tag}</span>
                        ))}
                      </div>

                      {/* Expanded bullets */}
                      <div
                        id={`exp-body-${key}`}
                        className="exp__body"
                        style={{
                          maxHeight: isOpen ? '600px' : '0',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <ul className="exp__bullets">
                          {role.bullets.map((b, bi) => (
                            <li key={bi} className="exp__bullet">
                              <span className="exp__bullet-dot" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ClientIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
