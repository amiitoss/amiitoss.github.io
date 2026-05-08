import { useState } from 'react';
import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const CATEGORY_ICONS = {
  Languages: '{ }',
  Frontend: '⬡',
  Backend: '⚙',
  Databases: '◈',
  'Tools & Protocols': '⚡',
};

const SKILL_LEVELS = {
  // Languages
  'Python': 92, 'JavaScript (ES6+)': 90, 'TypeScript': 85, 'Java': 65, 'C/C++': 60, 'HTML5': 95, 'CSS3': 88,
  // Frontend
  'ReactJS': 92, 'NextJS': 88, 'React Native': 80, 'Redux': 85, 'Redux Toolkit': 87, 'Material UI': 82,
  // Backend
  'FastAPI': 88, 'REST API Design': 90, 'SQLAlchemy ORM': 83, 'asyncio': 80, 'JWT Authentication': 85,
  // Databases
  'PostgreSQL': 82, 'TimescaleDB': 75,
  // Tools
  'Git': 90, 'GitHub': 90, 'Docker': 82, 'Postman': 85, 'OPC UA': 72, 'MQTT': 75, 'ROS': 60,
};

export default function Skills() {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = Object.keys(skills);

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="skills__header">
          <span className="section-label fade-up">Skills</span>
          <h2 className="section-title fade-up fade-up-delay-1">Tech Stack</h2>
          <p className="section-subtitle fade-up fade-up-delay-2">
            Technologies I use to build production-grade applications
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills__tabs fade-up fade-up-delay-2">
          <button
            className={`skills__tab ${activeCategory === null ? 'skills__tab--active' : ''}`}
            onClick={() => setActiveCategory(null)}
            id="skills-tab-all"
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills__tab ${activeCategory === cat ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              id={`skills-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <span className="skills__tab-icon">{CATEGORY_ICONS[cat]}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__sections fade-up fade-up-delay-3">
          {categories
            .filter((cat) => activeCategory === null || cat === activeCategory)
            .map((category) => (
              <div key={category} className="skills__category-block">
                <div className="skills__category-header">
                  <span className="skills__category-icon">{CATEGORY_ICONS[category]}</span>
                  <h3 className="skills__category-name">{category}</h3>
                  <span className="skills__category-count">{skills[category].length} skills</span>
                </div>
                <div className="skills__items">
                  {skills[category].map((skill) => (
                    <SkillPill key={skill} skill={skill} level={SKILL_LEVELS[skill] || 75} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

function SkillPill({ skill, level }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`skill-pill ${hovered ? 'skill-pill--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-pill__name">{skill}</div>
      <div className="skill-pill__bar">
        <div
          className="skill-pill__fill"
          style={{ width: hovered ? `${level}%` : '0%' }}
        />
      </div>
      <span className="skill-pill__level">{level}%</span>
    </div>
  );
}
