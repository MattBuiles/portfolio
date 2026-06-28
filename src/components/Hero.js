import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import './Hero.css';

const Hero = () => {
  const { lang } = useLanguage();
  const t = strings[lang].hero;
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setCurrentRole(0);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % t.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [t.roles.length]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__grid container-wide">
        <div className="hero__text">
          <span className="kicker hero__kicker">{t.kicker}</span>

          <h1 className="hero__title">
            {t.title1}
            <br />
            <em className="hero__title-em">{t.titleEm}</em>
            <span className="hero__title-dot">{t.titleDot}</span>
          </h1>

          <p className="lede hero__lede">{t.lede}</p>

          <div className="hero__role">
            <span className="hero__role-prefix">{t.currentlyPrefix}</span>
            <span className="hero__role-text" key={`${lang}-${currentRole}`}>
              {t.roles[currentRole]}
            </span>
          </div>

          <div className="hero__actions">
            <button type="button" className="btn btn-primary" onClick={() => scrollTo('#projects')}>
              <Icon name="folder-open" size={18} />
              {t.viewProjects}
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => scrollTo('#contact')}>
              <Icon name="paper-plane" size={18} />
              {t.contactMe}
            </button>
          </div>

          <ul className="hero__social">
            <li>
              <a href="https://github.com/MattBuiles" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" size={18} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/mateo-builes-73453531b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
            </li>
            <li>
              <a href="mailto:matebuilesd@gmail.com" aria-label="Email">
                <Icon name="envelope" size={18} />
              </a>
            </li>
            <li>
              <a href="https://x.com/MateB53" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <Icon name="twitter" size={18} />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img
              src="./images/profile.jpg"
              alt="Mateo Builes"
              className="hero__portrait-img"
              onError={(e) => {
                e.target.src = './images/profile-placeholder.svg';
                e.target.onerror = null;
              }}
            />
            <span className="hero__portrait-mark" aria-hidden="true">
              <span className="hero__portrait-mark-line" />
              <span className="hero__portrait-mark-label">2026</span>
            </span>
          </div>

          <dl className="hero__stats">
            <div className="hero__stat">
              <dt>{t.stat.experience}</dt>
              <dd>
                <span className="hero__stat-num">3</span>
                <span className="hero__stat-plus">+</span>
              </dd>
              <span className="hero__stat-unit">{t.stat.experienceUnit}</span>
            </div>
            <div className="hero__stat">
              <dt>{t.stat.projects}</dt>
              <dd>
                <span className="hero__stat-num">15</span>
                <span className="hero__stat-plus">+</span>
              </dd>
              <span className="hero__stat-unit">{t.stat.projectsUnit}</span>
            </div>
            <div className="hero__stat">
              <dt>{t.stat.certifications}</dt>
              <dd>
                <span className="hero__stat-num">12</span>
                <span className="hero__stat-plus">+</span>
              </dd>
              <span className="hero__stat-unit">{t.stat.certificationsUnit}</span>
            </div>
          </dl>
        </div>
      </div>

      <button
        type="button"
        className="hero__scroll"
        onClick={() => scrollTo('#about')}
        aria-label={t.scroll}
      >
        <span>{t.scroll}</span>
        <Icon name="arrow-down" size={14} />
      </button>
    </section>
  );
};

export default Hero;
