import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Sobre Mí</p>
          <h2 className="section-title">¿Quién Soy?</h2>
          <p className="section-description">
            Desarrollador apasionado con experiencia creando soluciones innovadoras y eficientes para problemas complejos.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src="https://via.placeholder.com/500" 
              alt="Mi foto" 
              className="about-image"
            />
          </div>
          
          <div className="about-text">
            <h3 className="about-greeting">¡Hola! Soy <span className="highlight">Tu Nombre</span></h3>
            <h4 className="about-profession">Desarrollador Full Stack</h4>
            
            <p className="about-description">
              Me especializo en crear experiencias digitales excepcionales con tecnologías modernas. 
              Mi enfoque combina diseño atractivo con código limpio y eficiente para crear 
              aplicaciones web que destacan.
            </p>
            
            <div className="about-details">
              <div className="about-detail">
                <span className="detail-label">Nombre:</span>
                <span className="detail-value">Tu Nombre Completo</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Email:</span>
                <span className="detail-value">email@ejemplo.com</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">Tu Ciudad, País</span>
              </div>
              <div className="about-detail">
                <span className="detail-label">Disponibilidad:</span>
                <span className="detail-value available">Disponible</span>
              </div>
            </div>
            
            <div className="about-actions">
              <a href="#contact" className="btn">Contáctame</a>
              <a href="#" className="btn btn-outline">Descargar CV</a>
            </div>
          </div>
        </div>
        
        <div className="skills-container">
          <h3 className="skills-title">Mis Habilidades</h3>
          <div className="skills-grid">
            {['JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'SQL', 'MongoDB', 'Git'].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">
                  <i className={`fas fa-code`}></i>
                </div>
                <h4 className="skill-name">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;