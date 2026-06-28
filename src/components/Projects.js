import React, { useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import projectsData from '../data/projects.json';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const CATEGORY_VALUES = ['featured', 'all', 'AI/ML', 'Data Science', 'Web Development', 'Mobile Development'];

const STATUS_TONE = {
  completed: 'positive',
  'in-progress': 'warning',
  planned: 'muted',
};

const Projects = () => {
  const { lang } = useLanguage();
  const t = strings[lang].projects;
  const [selected, setSelected] = useState('featured');
  const [open, setOpen] = useState(null);

  useScrollAnimation([selected, lang]);

  const projects = useMemo(() => {
    if (selected === 'featured') return projectsData.filter((p) => p.featured);
    if (selected === 'all') return projectsData;
    return projectsData.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="projects__h-em">{t.titleEm}</em>.
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <div className="projects__filters reveal">
          {CATEGORY_VALUES.map((value) => (
            <button
              key={value}
              type="button"
              className={`projects__filter ${selected === value ? 'is-active' : ''}`}
              onClick={() => setSelected(value)}
            >
              {t.filters[value] ?? value}
              <span className="projects__filter-count">
                {value === 'featured'
                  ? projectsData.filter((p) => p.featured).length
                  : value === 'all'
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === value).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="projects__list reveal reveal-delay-1">
          {projects.map((project, index) => {
            const tone = STATUS_TONE[project.status] ?? 'positive';
            const statusLabel = t.status[project.status] ?? project.status;
            return (
              <li key={`${selected}-${project.title}-${index}`} className="projects__row">
                <button
                  type="button"
                  className="projects__row-btn"
                  onClick={() => setOpen(project)}
                  aria-label={`Ver detalles de ${project.title}`}
                >
                  <span className="projects__row-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="projects__row-main">
                    <h3 className="projects__row-title">{project.title}</h3>
                    <p className="projects__row-desc">{project.description}</p>
                  </div>

                  <div className="projects__row-meta">
                    <ul className="projects__tags">
                      {project.technologies.slice(0, 3).map((t) => (
                        <li key={t} className="projects__tag">{t}</li>
                      ))}
                      {project.technologies.length > 3 && (
                        <li className="projects__tag projects__tag--more">
                          +{project.technologies.length - 3}
                        </li>
                      )}
                    </ul>
                    <span className={`projects__status projects__status--${tone}`}>
                      {statusLabel}
                    </span>
                  </div>

                  <span className="projects__row-arrow" aria-hidden="true">
                    <Icon name="arrow-down" size={16} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {open && (
          <div
            className="projects__modal"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(null)}
          >
            <div className="projects__modal-card" onClick={(e) => e.stopPropagation()}>
              <header className="projects__modal-head">
                <span className="kicker">{open.category}</span>
                <h3>{open.title}</h3>
                <button
                  type="button"
                  className="projects__modal-close"
                  onClick={() => setOpen(null)}
                  aria-label="Cerrar"
                >
                  <Icon name="times" size={18} />
                </button>
              </header>

              <p className="projects__modal-desc">{open.description}</p>

              <section className="projects__modal-section">
                <h4 className="about__sub">{t.modal.technologies}</h4>
                <ul className="projects__tags projects__tags--full">
                  {open.technologies.map((t) => (
                    <li key={t} className="projects__tag">{t}</li>
                  ))}
                </ul>
              </section>

              <footer className="projects__modal-actions">
                {open.demoUrl && open.demoUrl !== '#' && (
                  <a
                    href={open.demoUrl}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="external-link" size={16} />
                    {t.modal.demo}
                  </a>
                )}
                {open.githubUrl && (
                  <a
                    href={open.githubUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="github" size={16} />
                    {t.modal.code}
                  </a>
                )}
              </footer>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
