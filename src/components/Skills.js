import React, { useState } from 'react';
import Icon from './Icon';
import skillsData from '../data/skills.json';
import './Skills.css';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Habilidades Técnicas</h2>
        
        <div className="skills-content">
          {/* Technical Skills */}
          <div className="technical-skills animate-fade-in-left">
            <div className="skills-categories">
              {skillsData.technical.map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${selectedCategory === index ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(index)}
                >
                  {category.category}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {skillsData.technical[selectedCategory]?.skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <Icon name={skill.icon} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--skill-level': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="soft-skills animate-fade-in-right">
            <h3>Habilidades Blandas</h3>
            <div className="soft-skills-container">
              {skillsData.soft.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <div className="soft-skill-info">
                    <span className="soft-skill-name">{skill.name}</span>
                    <span className="soft-skill-level">{skill.level}%</span>
                  </div>
                  <div className="circular-progress">
                    <svg className="progress-ring" width="80" height="80">
                      <circle
                        className="progress-ring-circle"
                        stroke="var(--border)"
                        strokeWidth="6"
                        fill="transparent"
                        r="35"
                        cx="40"
                        cy="40"
                      />
                      <circle
                        className="progress-ring-progress"
                        stroke="var(--primary)"
                        strokeWidth="6"
                        fill="transparent"
                        r="35"
                        cx="40"
                        cy="40"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 35}`,
                          strokeDashoffset: `${2 * Math.PI * 35 * (1 - skill.level / 100)}`
                        }}
                      />
                    </svg>
                    <div className="progress-text">{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Preview */}
        <div className="skills-footer animate-fade-in-up">
          <div className="certification-preview">
            <h3>Certificaciones & Logros</h3>
            <p>Certificaciones especializadas en IA, ML y Data Science</p>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                const certificates = document.querySelector('#certificates');
                if (certificates) certificates.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Icon name="certificate" />
              Ver Certificados
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
