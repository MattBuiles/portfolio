import React, { useState } from 'react';
import Icon from './Icon';
import certificatesData from '../data/certificates.json';
import './Certificates.css';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const categories = [
    { value: 'all', label: 'Todos', icon: 'certificate', count: certificatesData.length },
    { value: 'AI/ML', label: 'IA & ML', icon: 'brain', count: certificatesData.filter(cert => cert.category === 'AI/ML').length },
    { value: 'Data Science', label: 'Data Science', icon: 'chart-line', count: certificatesData.filter(cert => cert.category === 'Data Science').length },
    { value: 'Cloud/DevOps', label: 'Cloud & DevOps', icon: 'cloud', count: certificatesData.filter(cert => cert.category === 'Cloud/DevOps').length },
    { value: 'Programming', label: 'Programación', icon: 'code', count: certificatesData.filter(cert => cert.category === 'Programming').length },
    { value: 'Web Development', label: 'Web Dev', icon: 'globe', count: certificatesData.filter(cert => cert.category === 'Web Development').length }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificatesData 
    : certificatesData.filter(cert => cert.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': '#667eea',
      'Data Science': '#f093fb',
      'Cloud/DevOps': '#4facfe',
      'Programming': '#43e97b',
      'Web Development': '#38ef7d',
      'Analytics': '#ff6b6b',
      'Management': '#feca57'
    };
    return colors[category] || '#667eea';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) return `Hace ${diffDays} días`;
    if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
    return `Hace ${Math.floor(diffDays / 365)} años`;
  };

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Certificaciones & Credenciales</h2>
        
        {/* Stats Overview */}
        <div className="certificates-stats animate-fade-in-up">
          <div className="stat-card">
            <div className="stat-icon">
              <Icon name="certificate" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{certificatesData.length}</span>
              <span className="stat-label">Certificaciones Totales</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Icon name="calendar-check" />
            </div>
            <div className="stat-content">
              <span className="stat-number">2024</span>
              <span className="stat-label">Última Certificación</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Icon name="star" />
            </div>
            <div className="stat-content">
              <span className="stat-number">5</span>
              <span className="stat-label">Categorías Diferentes</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Icon name="trophy" />
            </div>
            <div className="stat-content">
              <span className="stat-number">95%</span>
              <span className="stat-label">Promedio de Calificación</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="certificates-filter animate-fade-in-up">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`filter-tab ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
                style={{ '--category-color': getCategoryColor(category.value) }}
              >
                <Icon name={category.icon} />
                <span className="tab-label">{category.label}</span>
                <span className="tab-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid animate-fade-in-up">
          {filteredCertificates.map((certificate, index) => (
            <div 
              key={index} 
              className="certificate-card"
              style={{ '--category-color': getCategoryColor(certificate.category) }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="certificate-header">
                <div className="certificate-icon">
                  <Icon name={certificate.icon} />
                </div>
                <div className="certificate-meta">
                  <span className="certificate-category">{certificate.category}</span>
                  <span className="certificate-date">{getTimeAgo(certificate.date_issued)}</span>
                </div>
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-issuer">
                  <Icon name="building" />
                  {certificate.issuing_organization}
                </p>
                <p className="certificate-id">
                  <Icon name="id-badge" />
                  ID: {certificate.credential_id}
                </p>
              </div>
              
              <div className="certificate-skills">
                {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">{skill}</span>
                ))}
                {certificate.skills.length > 3 && (
                  <span className="skills-more">+{certificate.skills.length - 3}</span>
                )}
              </div>
              
              <div className="certificate-footer">
                <div className="certificate-verify">
                  <Icon name="check-circle" />
                  <span>Verificado</span>
                </div>
                <div className="certificate-expand">
                  <Icon name="expand-alt" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="certificate-modal" onClick={() => setSelectedCertificate(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-section">
                  <div 
                    className="modal-icon"
                    style={{ '--category-color': getCategoryColor(selectedCertificate.category) }}
                  >
                    <Icon name={selectedCertificate.icon} />
                  </div>
                  <div>
                    <h3 className="modal-title">{selectedCertificate.title}</h3>
                    <p className="modal-issuer">{selectedCertificate.issuing_organization}</p>
                  </div>
                </div>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedCertificate(null)}
                >
                  <Icon name="times" />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-info-grid">
                  <div className="info-item">
                    <Icon name="calendar-alt" className="info-icon" />
                    <div>
                      <span className="info-label">Fecha de Emisión</span>
                      <span className="info-value">{formatDate(selectedCertificate.date_issued)}</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <Icon name="id-badge" className="info-icon" />
                    <div>
                      <span className="info-label">ID de Credencial</span>
                      <span className="info-value">{selectedCertificate.credential_id}</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <Icon name="tag" className="info-icon" />
                    <div>
                      <span className="info-label">Categoría</span>
                      <span className="info-value">{selectedCertificate.category}</span>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <Icon name="clock" className="info-icon" />
                    <div>
                      <span className="info-label">Obtenido</span>
                      <span className="info-value">{getTimeAgo(selectedCertificate.date_issued)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-skills">
                  <h4>Habilidades Validadas</h4>
                  <div className="skills-grid">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="skill-tag"
                        style={{ '--category-color': getCategoryColor(selectedCertificate.category) }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button className="btn btn-primary">
                    <Icon name="external-link-alt" />
                    Verificar Credencial
                  </button>
                  <button className="btn btn-secondary">
                    <Icon name="download" />
                    Descargar Certificado
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="certificates-cta animate-fade-in-up">
          <div className="cta-content">
            <h3>¿Interesado en mi Desarrollo Profesional?</h3>
            <p>Siempre estoy aprendiendo nuevas tecnologías y obteniendo certificaciones relevantes para mantenerme actualizado en el campo de la IA y Data Science.</p>
            <div className="cta-actions">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const contact = document.querySelector('#contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="envelope" />
                Contactarme
              </button>
              <button className="btn btn-secondary">
                <Icon name="download" />
                Descargar CV Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;