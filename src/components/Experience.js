import React, { useState } from 'react';
import Icon from './Icon';
import experienceData from '../data/experience.json';
import './Experience.css';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const getTypeColor = (type) => {
    const colors = {
      education: '#667eea',
      research: '#f093fb',
      teaching: '#4facfe',
      development: '#43e97b'
    };
    return colors[type] || '#667eea';
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Experiencia</h2>
        
        <div className="experience-content">
          {/* Timeline Navigation */}
          <div className="experience-timeline animate-fade-in-left">
            <div className="timeline-line"></div>
            {experienceData.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item ${selectedExperience === index ? 'active' : ''}`}
                onClick={() => setSelectedExperience(index)}
                style={{ '--accent-color': getTypeColor(item.type) }}
              >
                <div className="timeline-dot">
                  <Icon name={item.icon} />
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-title">{item.jobTitle}</h4>
                  <p className="timeline-company">{item.company}</p>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="experience-details animate-fade-in-right">
            {experienceData[selectedExperience] && (
              <div className="experience-card">
                <div className="experience-header">
                  <div 
                    className="experience-icon"
                    style={{ '--accent-color': getTypeColor(experienceData[selectedExperience].type) }}
                  >
                    <Icon name={experienceData[selectedExperience].icon} />
                  </div>
                  <div className="experience-info">
                    <h3 className="experience-title">
                      {experienceData[selectedExperience].jobTitle}
                    </h3>
                    <p className="experience-company">
                      {experienceData[selectedExperience].company}
                    </p>
                    <span className="experience-duration">
                      {experienceData[selectedExperience].duration}
                    </span>
                  </div>
                </div>

                <div className="experience-body">
                  <h4>Responsabilidades y Logros:</h4>
                  <ul className="responsibilities-list">
                    {experienceData[selectedExperience].responsibilities.map((responsibility, index) => (
                      <li key={index} className="responsibility-item">
                        <Icon name="check-circle" className="check-icon" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-type">
                  <span 
                    className="type-badge"
                    style={{ '--accent-color': getTypeColor(experienceData[selectedExperience].type) }}
                  >
                    {experienceData[selectedExperience].type === 'education' && 'Educación'}
                    {experienceData[selectedExperience].type === 'research' && 'Investigación'}
                    {experienceData[selectedExperience].type === 'teaching' && 'Docencia'}
                    {experienceData[selectedExperience].type === 'development' && 'Desarrollo'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="experience-stats animate-fade-in-up">
          <div className="stat-item">
            <Icon name="calendar" className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
          </div>
          <div className="stat-item">
            <Icon name="sitemap" className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">15+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
          </div>
          <div className="stat-item">
            <Icon name="users" className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">50+</span>
              <span className="stat-label">Estudiantes mentoreados</span>
            </div>
          </div>
          <div className="stat-item">
            <Icon name="flask" className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">5+</span>
              <span className="stat-label">Investigaciones publicadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;