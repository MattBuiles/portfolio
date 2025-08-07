import React, { useState } from 'react';
import Icon from './Icon';
import certificatesData from '../data/certificates.json';
import './Certificates.css';

// Mapeo de títulos de certificados a nombres de archivos PDF
const getCertificateFilename = (title, organization, date) => {
  const fileMap = {
    // DataCamp certificates
    'Introduction to Shell': 'datacamp_introduction_to_shell_2025.pdf',
    'MLOps Concepts': 'datacamp_mlops_concepts_2025.pdf',
    'MLOps Deployment and Life Cycling': 'datacamp_mlops_deployment_2025.pdf',
    'Supervised Learning with scikit-learn': 'datacamp_supervised_learning_scikit_2025.pdf',
    'Introduction to MLflow': 'datacamp_introduction_mlflow_2025.pdf',
    'ETL and ELT in Python': 'datacamp_etl_elt_python_2025.pdf',
    
    // Coursera - University of Michigan
    'Programming for Everybody (Getting Started with Python)': 'coursera_umich_python_getting_started_2022.pdf',
    'Python Data Structures': 'coursera_umich_python_data_structures_2022.pdf',
    'Introduction to Data Science in Python': 'coursera_umich_data_science_python_2023.pdf',
    
    // Coursera - IBM
    'Introduction to Artificial Intelligence (AI)': 'coursera_ibm_ai_introduction_2024.pdf',
    'Generative AI: Introduction and Applications': 'coursera_ibm_generative_ai_intro_2024.pdf',
    'Prompt Engineering for ChatGPT': 'coursera_ibm_prompt_engineering_2024.pdf',
    'Artificial Intelligence (AI) Essentials': 'coursera_ibm_ai_essentials_2024.pdf',
    
    // Coursera - Imperial College London
    'Mathematics for Machine Learning: Linear Algebra': 'coursera_imperial_linear_algebra_2023.pdf',
    
    // Coursera - University of California, Irvine
    'Problem Solving Using Computational Thinking': 'coursera_uci_problem_solving_2025.pdf',
    
    // MinTIC
    'IA para todos: Bootcamp intermedio en Inteligencia Artificial': 'mintic_ai_bootcamp_intermedio_2025.pdf',
    
    // Platzi
    'Introducción a la Nube con Azure': 'platzi_introduccion_nube_2025.pdf'
  };
  
  return fileMap[title] || null;
};

// Función para obtener URL de verificación desde los datos del certificado
const getVerificationUrl = (certificate) => {
  // Primera prioridad: URL específica en los datos del certificado
  if (certificate.verification_url) {
    return certificate.verification_url;
  }
  
  // Segunda prioridad: URL desde credential_url
  if (certificate.credential_url) {
    return certificate.credential_url;
  }
  
  // Tercera prioridad: URLs generales por organización como fallback
  const org = certificate.issuing_organization.toLowerCase();
  
  if (org.includes('datacamp')) {
    return 'https://www.datacamp.com/profile/matebuilesd';
  } else if (org.includes('coursera')) {
    return 'https://www.coursera.org/user/matebuilesd';
  } else if (org.includes('ibm')) {
    return 'https://www.credly.com/users/mateo-builes-duque/badges';
  } else if (org.includes('platzi')) {
    return 'https://platzi.com/p/mateobui/';
  } else if (org.includes('mintic') || org.includes('ministerio')) {
    return 'https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo/certificados';
  }
  
  // No hay URL disponible
  return null;
};

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const categories = [
    { value: 'all', label: 'Todos', icon: 'certificate', count: certificatesData.length },
    { value: 'AI/ML', label: 'IA & ML', icon: 'brain', count: certificatesData.filter(cert => cert.category === 'AI/ML').length },
    { value: 'Data Science', label: 'Data Science', icon: 'chart-line', count: certificatesData.filter(cert => cert.category === 'Data Science').length },
    { value: 'Cloud/DevOps', label: 'Cloud & DevOps', icon: 'cloud', count: certificatesData.filter(cert => cert.category === 'Cloud/DevOps').length },
    { value: 'Programming', label: 'Programación', icon: 'code', count: certificatesData.filter(cert => cert.category === 'Programming').length },
    { value: 'Soft Skills', label: 'Habilidades Blandas', icon: 'users', count: certificatesData.filter(cert => cert.category === 'Soft Skills').length }
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
              <Icon name="calendar" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{Math.max(...certificatesData.map(cert => new Date(cert.date_issued).getFullYear()))}</span>
              <span className="stat-label">Última Certificación</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Icon name="layer-group" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categorías Diferentes</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Icon name="chart-line" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{Math.round((certificatesData.filter(cert => cert.date_issued >= '2024-01-01').length / certificatesData.length) * 100)}%</span>
              <span className="stat-label">Certificaciones Recientes</span>
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
                {certificate.skills && certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">{skill}</span>
                ))}
                {certificate.skills && certificate.skills.length > 3 && (
                  <span className="skills-more">+{certificate.skills.length - 3}</span>
                )}
              </div>
              
              <div className="certificate-footer">
                <div className="certificate-verify">
                  <Icon name="check-circle" />
                  <span>Verificado</span>
                </div>
                <div className="certificate-expand">
                  <Icon name="expand" />
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
                    <Icon name="calendar" className="info-icon" />
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
                    {selectedCertificate.skills && selectedCertificate.skills.map((skill, index) => (
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
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      const verificationUrl = getVerificationUrl(selectedCertificate);
                      if (verificationUrl) {
                        window.open(verificationUrl, '_blank');
                      } else {
                        alert('URL de verificación no disponible para este certificado. Por favor, contacta directamente con la institución emisora.');
                      }
                    }}
                    title="Abrir página de verificación en una nueva pestaña"
                  >
                    <Icon name="external-link" />
                    Verificar Credencial
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => {
                      const filename = getCertificateFilename(
                        selectedCertificate.title, 
                        selectedCertificate.issuing_organization, 
                        selectedCertificate.date_issued
                      );
                      
                      if (filename) {
                        // Crear enlace de descarga real
                        const link = document.createElement('a');
                        link.href = `/certificates/${filename}`;
                        link.download = filename;
                        link.style.display = 'none';
                        
                        // Agregar al DOM, hacer clic, y remover
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else {
                        alert(`Certificado no disponible para descarga.\nTítulo: ${selectedCertificate.title}`);
                      }
                    }}
                  >
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
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  // Crear elemento de descarga para el CV completo
                  const link = document.createElement('a');
                  link.href = '/certificates/CV_Completo.pdf';
                  link.download = 'CV_Completo.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
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