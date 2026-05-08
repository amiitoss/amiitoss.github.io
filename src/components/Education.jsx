import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" ref={ref} className="education-section">
      <div className="container">
        <div className="edu__header">
          <span className="section-label fade-up">Education</span>
          <h2 className="section-title fade-up fade-up-delay-1">Academic Background</h2>
        </div>

        <div className="edu__card glass-card fade-up fade-up-delay-2">
          <div className="edu__left">
            <div className="edu__institution-icon">🎓</div>
            <div>
              <h3 className="edu__institution">{education.institution}</h3>
              <p className="edu__degree">{education.degree}</p>
              <div className="edu__meta">
                <span className="edu__period">
                  <CalendarIcon /> {education.period}
                </span>
                <span className="edu__cgpa">
                  <StarIcon /> CGPA: {education.cgpa}
                </span>
              </div>
            </div>
          </div>

          <div className="edu__coursework">
            <h4 className="edu__coursework-title">Relevant Coursework</h4>
            <div className="edu__courses">
              {education.coursework.map((c) => (
                <span key={c} className="tag tag-purple">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
}

function StarIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width="13" height="13"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
}
