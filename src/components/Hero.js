import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import './Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Estudiante de Ingeniería de Sistemas",
    "Especialista en IA y Machine Learning",
    "Investigador en Biología Funcional",
    "Desarrollador Full Stack",
    "Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting animate-fade-in-up">
              <span className="greeting-text">¡Hola! Soy</span>
            </div>
            
            <h1 className="hero-name animate-fade-in-up">
              <span className="name-highlight">Tu Nombre</span>
            </h1>
            
            <div className="hero-role animate-fade-in-up">
              <span className="role-prefix">Soy </span>
              <span className="role-text" key={currentRole}>
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="hero-description animate-fade-in-up">
              Apasionado por la <strong>Inteligencia Artificial</strong>, <strong>Machine Learning</strong> y 
              <strong> Data Science</strong>. Estudiante de Ingeniería de Sistemas en la Universidad Nacional de Colombia, 
              con experiencia en investigación y desarrollo de aplicaciones tecnológicas innovadoras.
            </p>
            
            <div className="hero-stats animate-fade-in-up">
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Proyectos completados</span>
              </div>
              <div className="stat">
                <span className="stat-number">8+</span>
                <span className="stat-label">Certificaciones</span>
              </div>
            </div>
            
            <div className="hero-actions animate-fade-in-up">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('#projects')}
              >
                <Icon name="folder-open" />
                Ver Proyectos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('#contact')}
              >
                <Icon name="envelope" />
                Contactarme
              </button>
            </div>
            
            <div className="hero-social animate-fade-in-up">
              <a href="https://github.com/username" className="social-link" target="_blank" rel="noopener noreferrer">
                <Icon name="github" />
              </a>
              <a href="https://linkedin.com/in/username" className="social-link" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" />
              </a>
              <a href="mailto:email@example.com" className="social-link">
                <Icon name="envelope" />
              </a>
              <a href="https://twitter.com/username" className="social-link" target="_blank" rel="noopener noreferrer">
                <Icon name="twitter" />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container animate-float">
              <div className="hero-image">
                <div className="image-placeholder">
                  <Icon name="user-circle" size="5x" />
                </div>
                <div className="image-decoration"></div>
              </div>
            </div>
            
            <div className="tech-stack">
              <div className="tech-item animate-pulse">
                <Icon name="python" />
                <span>Python</span>
              </div>
              <div className="tech-item animate-pulse">
                <Icon name="react" />
                <span>React</span>
              </div>
              <div className="tech-item animate-pulse">
                <Icon name="brain" />
                <span>AI/ML</span>
              </div>
              <div className="tech-item animate-pulse">
                <Icon name="database" />
                <span>Data</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator" onClick={() => scrollToSection('#about')}>
          <div className="scroll-arrow">
            <Icon name="chevron-down" />
          </div>
          <span className="scroll-text">Scroll para más</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
