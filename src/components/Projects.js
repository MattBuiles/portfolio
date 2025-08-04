import React, { useState } from 'react';
import Icon from './Icon';
import projectsData from '../data/projects.json';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { value: 'all', label: 'Todos', icon: 'th-large' },
    { value: 'AI/ML', label: 'IA & ML', icon: 'brain' },
    { value: 'Data Science', label: 'Data Science', icon: 'chart-line' },
    { value: 'Web Development', label: 'Web Dev', icon: 'code' },
    { value: 'Education', label: 'Educación', icon: 'graduation-cap' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const featuredProjects = projectsData.filter(project => project.featured);

  const getStatusColor = (status) => {
    const colors = {
      'completed': '#10b981',
      'in-progress': '#f59e0b',
      'planned': '#6b7280'
    };
    return colors[status] || '#6b7280';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'completed': 'Completado',
      'in-progress': 'En Progreso',
      'planned': 'Planeado'
    };
    return labels[status] || status;
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Proyectos</h2>
        
        {/* Featured Projects */}
        <div className="featured-projects animate-fade-in-up">
          <h3 className="featured-title">Proyectos Destacados</h3>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className="featured-card">
                <div className="featured-image">
                  <div className="image-placeholder">
                    <Icon name="laptop-code" size="3x" />
                  </div>
                  <div 
                    className="status-badge"
                    style={{ '--status-color': getStatusColor(project.status) }}
                  >
                    {getStatusLabel(project.status)}
                  </div>
                </div>
                <div className="featured-content">
                  <div className="featured-header">
                    <h4 className="featured-project-title">{project.title}</h4>
                    <span className="featured-category">{project.category}</span>
                  </div>
                  <p className="featured-description">{project.description}</p>
                  <div className="featured-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="featured-actions">
                    <a 
                      href={project.demoUrl} 
                      className="btn btn-primary btn-sm"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icon name="external-link" />
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="btn btn-secondary btn-sm"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="projects-filter animate-fade-in-up">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                <Icon name={category.icon} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="projects-grid animate-fade-in-up">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <Icon name="folder-open" size="2x" />
                </div>
                <div className="project-overlay">
                  <div className="overlay-actions">
                    <a 
                      href={project.demoUrl} 
                      className="overlay-btn"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="external-link" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="overlay-btn"
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon name="github" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                  <span 
                    className="project-status"
                    style={{ '--status-color': getStatusColor(project.status) }}
                  >
                    {getStatusLabel(project.status)}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-chip">{tech}</span>
                  ))}
                </div>
                
                <div className="project-category">
                  <Icon name="tag" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <Icon name="times" />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-image">
                  <div className="image-placeholder">
                    <Icon name="laptop-code" size="4x" />
                  </div>
                </div>
                
                <div className="modal-info">
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-tech">
                    <h4>Tecnologías utilizadas:</h4>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <a 
                      href={selectedProject.demoUrl} 
                      className="btn btn-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icon name="external-link" />
                      Ver Demo
                    </a>
                    <a 
                      href={selectedProject.githubUrl} 
                      className="btn btn-secondary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" />
                      Ver Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;