import React from 'react';
import Icon from './Icon';
import './About-new.css';

const About = () => {
  const personalInfo = [
    { label: 'Universidad', value: 'Universidad Nacional de Colombia', icon: 'university' },
    { label: 'Carrera', value: 'Ingeniería de Sistemas', icon: 'graduation-cap' },
    { label: 'Especialización', value: 'IA, ML y Data Science', icon: 'brain' },
    { label: 'Ubicación', value: 'Bogotá, Colombia', icon: 'map-marker-alt' },
    { label: 'Email', value: 'tu.email@example.com', icon: 'envelope' },
    { label: 'Estado', value: 'Disponible para proyectos', icon: 'check-circle' }
  ];

  const interests = [
    { name: 'Inteligencia Artificial', icon: 'robot', color: '#667eea' },
    { name: 'Machine Learning', icon: 'brain', color: '#764ba2' },
    { name: 'Data Science', icon: 'chart-line', color: '#f093fb' },
    { name: 'Deep Learning', icon: 'project-diagram', color: '#4facfe' },
    { name: 'Computer Vision', icon: 'eye', color: '#43e97b' },
    { name: 'NLP', icon: 'language', color: '#38ef7d' },
    { name: 'Investigación', icon: 'flask', color: '#ff6b6b' },
    { name: 'Desarrollo Web', icon: 'code', color: '#feca57' }
  ];

  const values = [
    {
      title: 'Innovación',
      description: 'Busco constantemente nuevas formas de resolver problemas complejos usando tecnología.',
      icon: 'lightbulb'
    },
    {
      title: 'Aprendizaje Continuo',
      description: 'Me mantengo actualizado con las últimas tendencias en IA y tecnología.',
      icon: 'book-open'
    },
    {
      title: 'Colaboración',
      description: 'Creo en el poder del trabajo en equipo para lograr resultados excepcionales.',
      icon: 'users'
    },
    {
      title: 'Impacto Social',
      description: 'Utilizo la tecnología para crear soluciones que generen un impacto positivo.',
      icon: 'heart'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-intro animate-fade-in-left">
            <div className="intro-text">
              <p className="lead">
                Soy un estudiante apasionado de <strong>Ingeniería de Sistemas</strong> en la Universidad Nacional de Colombia, 
                con un enfoque especializado en <strong>Inteligencia Artificial</strong>, <strong>Machine Learning</strong> y 
                <strong>Data Science</strong>.
              </p>
              
              <p>
                Mi experiencia incluye participación activa en el <strong>grupo de investigación de Biología Funcional</strong>, 
                donde he colaborado en el desarrollo de aplicativos innovadores que combinan biología y tecnología. 
                También he servido como <strong>monitor académico</strong> para la materia de Simulación de Sistemas, 
                ayudando a otros estudiantes a comprender conceptos complejos.
              </p>
              
              <p>
                Mi pasión por la tecnología va más allá del aula. Me dedico al <strong>desarrollo full stack</strong> 
                y disfruto creando soluciones que integren algoritmos de IA con interfaces de usuario intuitivas. 
                Busco constantemente oportunidades para aplicar mis conocimientos en proyectos que generen un impacto real.
              </p>
            </div>
            
            <div className="personal-info">
              <h3>Información Personal</h3>
              <div className="info-grid">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <Icon name={info.icon} className="info-icon" />
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-highlights animate-fade-in-right">
            <div className="interests-section">
              <h3>Áreas de Interés</h3>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="interest-item"
                    style={{ '--accent-color': interest.color }}
                  >
                    <Icon name={interest.icon} className="interest-icon" />
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="values-section">
              <h3>Mis Valores</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <div className="value-icon">
                      <Icon name={value.icon} />
                    </div>
                    <div className="value-content">
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-cta animate-fade-in-up">
          <p className="cta-text">
            ¿Interesado en colaborar en proyectos de IA o Data Science?
          </p>
          <button className="btn btn-primary" onClick={() => {
            const contact = document.querySelector('#contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}>
            <Icon name="paper-plane" />
            ¡Hablemos!
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;