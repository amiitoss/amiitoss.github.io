import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="proj__header">
          <span className="section-label fade-up">Projects</span>
          <h2 className="section-title fade-up fade-up-delay-1">Featured Work</h2>
          <p className="section-subtitle fade-up fade-up-delay-2">
            Production-grade projects built with a focus on architecture and quality
          </p>
        </div>

        <div className="proj__grid fade-up fade-up-delay-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="proj__github-cta fade-up fade-up-delay-3">
          <div className="proj__github-card glass-card">
            <div className="proj__github-icon">
              <GitHubIcon />
            </div>
            <div className="proj__github-text">
              <h3>More on GitHub</h3>
              <p>Check out my repositories for more projects and contributions</p>
            </div>
            <a
              href="https://github.com/amiitoss"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="projects-github-cta"
            >
              Visit GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="proj__card">
      {/* Card glow border */}
      <div className="proj__card-glow" />

      <div className="proj__card-inner">
        {/* Header */}
        <div className="proj__card-header">
          <div className="proj__card-icon">{project.icon}</div>
          <div className="proj__card-title-group">
            <h3 className="proj__card-name">{project.name}</h3>
            <p className="proj__card-tagline">{project.tagline}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj__card-github-link"
            aria-label={`View ${project.name} on GitHub`}
          >
            <GitHubIcon />
            <span>View Code</span>
          </a>
        </div>

        {/* Description */}
        <p className="proj__card-description">{project.description}</p>

        {/* Highlights */}
        <div className="proj__highlights">
          {project.highlights.map((h, i) => (
            <div key={i} className="proj__highlight">
              <span className="proj__highlight-icon">✦</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="proj__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag tag-cyan">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}
