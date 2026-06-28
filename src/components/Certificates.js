import React, { useMemo, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import certificatesData from '../data/certificates.json';
import './Certificates.css';

const CERT_FILES = {
  'Monitoring Machine Learning in Python': 'datacamp_monitoring_ml_python_2025.pdf',
  'Monitoring Machine Learning Concepts': 'datacamp_monitoring_ml_concepts_2025.pdf',
  'AWS Academy Graduate - Cloud Foundations': 'aws_academy_cloud_foundations_2025.pdf',
  'CI/CD for Machine Learning': 'datacamp_ci_cd_machine_learning_2025.pdf',
  'Full Stack Open': 'fullstack_certificate_2025.png',
  'Machine Learning Engineer': 'datacamp_machine_learning_engineer_2025.pdf',
  'Introduction to Docker': 'datacamp_introduction_docker_2025.pdf',
  'Introduction to Data Versioning with DVC': 'datacamp_introduction_dvc_2025.pdf',
  'Introduction to Shell': 'datacamp_introduction_to_shell_2025.pdf',
  'MLOps Concepts': 'datacamp_mlops_concepts_2025.pdf',
  'MLOps Deployment and Life Cycling': 'datacamp_mlops_deployment_2025.pdf',
  'Supervised Learning with scikit-learn': 'datacamp_supervised_learning_scikit_2025.pdf',
  'Introduction to MLflow': 'datacamp_introduction_mlflow_2025.pdf',
  'ETL and ELT in Python': 'datacamp_etl_elt_python_2025.pdf',
  'Introduction to Data Quality with Great Expectations': 'datacamp_introduction_great_expectations_2025.pdf',
  'Programming for Everybody (Getting Started with Python)': 'coursera_umich_python_getting_started_2022.pdf',
  'Python Data Structures': 'coursera_umich_python_data_structures_2022.pdf',
  'Introduction to Data Science in Python': 'coursera_umich_data_science_python_2023.pdf',
  'Introduction to Artificial Intelligence (AI)': 'coursera_ibm_ai_introduction_2024.pdf',
  'Generative AI: Introduction and Applications': 'coursera_ibm_generative_ai_intro_2024.pdf',
  'Prompt Engineering for ChatGPT': 'coursera_ibm_prompt_engineering_2024.pdf',
  'Artificial Intelligence (AI) Essentials': 'coursera_ibm_ai_essentials_2024.pdf',
  'Artificial Intelligence Essentials V2': 'credly_coursera_ibm_ai_essentials_2024.pdf',
  'Mathematics for Machine Learning: Linear Algebra': 'coursera_imperial_linear_algebra_2023.pdf',
  'Problem Solving Using Computational Thinking': 'coursera_uci_problem_solving_2025.pdf',
  'Bootcamp de Inteligencia Artificial Nivel Intermedio': 'mintic_ai_bootcamp_intermedio_2025.png',
  'Introducción a la Nube con Azure': 'platzi_introduccion_nube_2025.pdf',
  'Building with the Claude API': 'anthropic_building_claude_api_2026.pdf',
  'Claude Code in Action': 'anthropic_claude_code_in_action_2026.pdf',
  'Introduction to agent skills': 'anthropic_intro_agent_skills_2026.pdf',
  'Introduction to Model Context Protocol': 'anthropic_intro_mcp_2026.pdf',
};

const FEATURED_TITLES = new Set([
  'Machine Learning Engineer',
  'AWS Academy Graduate - Cloud Foundations',
  'Bootcamp de Inteligencia Artificial Nivel Intermedio',
  'Full Stack Open',
  'Building with the Claude API',
  'Claude Code in Action',
]);

const getVerificationUrl = (certificate) => {
  if (certificate.verification_url) return certificate.verification_url;
  if (certificate.credential_url) return certificate.credential_url;

  const org = (certificate.issuing_organization ?? '').toLowerCase();
  if (org.includes('anthropic')) return null;
  if (org.includes('datacamp')) return 'https://www.datacamp.com/profile/matebuilesd';
  if (org.includes('coursera')) return 'https://www.coursera.org/user/matebuilesd';
  if (org.includes('ibm')) return 'https://www.credly.com/users/mateo-builes-duque/badges';
  if (org.includes('platzi')) return 'https://platzi.com/p/mateobui/';
  return null;
};

const formatDate = (iso, lang) =>
  new Date(iso).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

const timeAgo = (iso, lang) => {
  const d = new Date(iso);
  const days = Math.ceil(Math.abs(Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
  if (lang === 'es') {
    if (days < 30) return `Hace ${days} días`;
    if (days < 365) return `Hace ${Math.floor(days / 30)} meses`;
    return `Hace ${Math.floor(days / 365)} años`;
  }
  if (days < 30) return `${days} days ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;
  return `${Math.floor(days / 365)} years ago`;
};

const Certificates = () => {
  const { lang } = useLanguage();
  const t = strings[lang].certificates;
  const [filter, setFilter] = useState('featured');
  const [open, setOpen] = useState(null);

  const categories = useMemo(() => {
    const all = certificatesData.length;
    const groups = {};
    for (const c of certificatesData) {
      groups[c.category] = (groups[c.category] ?? 0) + 1;
    }
    return [
      { value: 'featured', label: t.filterFeatured, count: FEATURED_TITLES.size },
      { value: 'all', label: t.filterAll, count: all },
      ...Object.entries(groups).map(([cat, count]) => ({ value: cat, label: cat, count })),
    ];
  }, [t]);

  const items = useMemo(() => {
    let list;
    if (filter === 'featured') list = certificatesData.filter((c) => FEATURED_TITLES.has(c.title));
    else if (filter === 'all') list = [...certificatesData];
    else list = certificatesData.filter((c) => c.category === filter);
    return list.sort((a, b) => new Date(b.date_issued) - new Date(a.date_issued));
  }, [filter]);

  const downloadFile = (title) => {
    const filename = CERT_FILES[title];
    if (!filename) {
      alert(lang === 'es' ? `PDF no disponible para: ${title}` : `PDF not available for: ${title}`);
      return;
    }
    const link = document.createElement('a');
    link.href = `./certificates/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="certs__h-em">{t.titleEm}</em>.
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <div className="certs__filters reveal">
          {categories.map((c) => (
            <button
              key={c.value}
              type="button"
              className={`certs__filter ${filter === c.value ? 'is-active' : ''}`}
              onClick={() => setFilter(c.value)}
            >
              {c.label}
              <span className="certs__filter-count">{c.count}</span>
            </button>
          ))}
        </div>

        <ul className="certs__grid reveal reveal-delay-1">
          {items.map((cert, i) => {
            const hasFile = Boolean(CERT_FILES[cert.title]);
            return (
              <li key={`${cert.title}-${i}`} className="certs__card">
                <button
                  type="button"
                  className="certs__card-btn"
                  onClick={() => setOpen(cert)}
                  aria-label={`Detalle de ${cert.title}`}
                >
                  <header className="certs__card-head">
                    <span className="certs__card-icon">
                      <Icon name={cert.icon} size={20} />
                    </span>
                    <span className="certs__card-meta">
                      <span className="badge badge-accent">{cert.category}</span>
                      <span className="certs__card-date">{timeAgo(cert.date_issued, lang)}</span>
                    </span>
                  </header>

                  <h3 className="certs__card-title">{cert.title}</h3>

                  <p className="certs__card-issuer">{cert.issuing_organization}</p>

                  {cert.skills?.length > 0 && (
                    <ul className="certs__card-skills">
                      {cert.skills.slice(0, 3).map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                      {cert.skills.length > 3 && (
                        <li className="certs__card-skill-more">+{cert.skills.length - 3}</li>
                      )}
                    </ul>
                  )}

                  <footer className="certs__card-footer">
                    <span className="certs__card-verify">
                      <Icon name="check-circle" size={14} />
                      {hasFile ? t.pdfAvailable : t.verifiable}
                    </span>
                    <span className="certs__card-expand">
                      <Icon name="external-link" size={14} />
                    </span>
                  </footer>
                </button>
              </li>
            );
          })}
        </ul>

        {open && (
          <div className="projects__modal" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
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

              <p className="certs__modal-issuer">{open.issuing_organization}</p>

              <div className="certs__modal-info">
                <div>
                  <span className="about__sub">{t.modal.date}</span>
                  <p>{formatDate(open.date_issued, lang)}</p>
                </div>
                <div>
                  <span className="about__sub">{t.modal.credential}</span>
                  <p>{open.credential_id}</p>
                </div>
                {open.duration && (
                  <div>
                    <span className="about__sub">{t.modal.duration}</span>
                    <p>{open.duration}</p>
                  </div>
                )}
              </div>

              {open.skills?.length > 0 && (
                <section className="projects__modal-section">
                  <h4 className="about__sub">{t.modal.skills}</h4>
                  <ul className="projects__tags projects__tags--full">
                    {open.skills.map((s) => (
                      <li key={s} className="projects__tag">{s}</li>
                    ))}
                  </ul>
                </section>
              )}

              <footer className="projects__modal-actions">
                {getVerificationUrl(open) && (
                  <a
                    href={getVerificationUrl(open)}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="external-link" size={16} />
                    {t.modal.verify}
                  </a>
                )}
                {CERT_FILES[open.title] && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => downloadFile(open.title)}
                  >
                    <Icon name="download" size={16} />
                    {t.modal.downloadPdf}
                  </button>
                )}
              </footer>
            </div>
          </div>
        )}

        <div className="certs__cta reveal">
          <div>
            <h3>{t.ctaTitle}</h3>
            <p>{t.ctaText}</p>
          </div>
          <div className="certs__cta-actions">
            <button type="button" className="btn btn-primary" onClick={scrollToContact}>
              <Icon name="envelope" size={16} />
              {t.ctaContact}
            </button>
            <a
              href="./certificates/CV_Completo.pdf"
              download="CV_Completo.pdf"
              className="btn btn-secondary"
            >
              <Icon name="download" size={16} />
              {t.ctaCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
