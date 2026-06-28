import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import skillsData from '../data/skills.json';
import './Skills.css';

const Skills = () => {
  const { lang } = useLanguage();
  const t = strings[lang].skills;
  const [activeIndex, setActiveIndex] = useState(0);

  const technical = skillsData.technical ?? [];
  const soft = skillsData.soft ?? [];
  const current = technical[activeIndex];

  const scrollToCerts = () => {
    document.querySelector('#certificates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="section skills section-alt">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="skills__h-em">{t.titleEm}</em>.
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <div className="skills__nav reveal">
          {technical.map((category, index) => (
            <button
              key={category.category}
              type="button"
              className={`skills__tab ${activeIndex === index ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="skills__tab-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="skills__tab-label">{category.category}</span>
            </button>
          ))}
        </div>

        <div className="skills__panel reveal reveal-delay-1">
          {current?.skills?.map((skill) => (
            <article key={skill.name} className="skills__item">
              <div className="skills__item-head">
                <Icon name={skill.icon} size={18} className="skills__item-icon" />
                <h4 className="skills__item-name">{skill.name}</h4>
                <span className="skills__item-level tabular-nums">{skill.level}%</span>
              </div>
              <div className="skills__bar" aria-hidden="true">
                <div className="skills__bar-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </article>
          ))}
        </div>

        <div className="skills__soft reveal">
          <header className="skills__soft-head">
            <span className="kicker">{t.softKicker}</span>
            <h3>{t.softTitle}</h3>
          </header>

          <ul className="skills__soft-list">
            {soft.map((skill) => (
              <li key={skill.name} className="skills__soft-item">
                <div className="skills__soft-row">
                  <span className="skills__soft-name">{skill.name}</span>
                  <span className="skills__soft-level tabular-nums">{skill.level}%</span>
                </div>
                <div className="skills__bar skills__bar--soft" aria-hidden="true">
                  <div className="skills__bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills__cta reveal">
          <div>
            <h3>{t.ctaTitle}</h3>
            <p>{t.ctaText}</p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={scrollToCerts}>
            <Icon name="certificate" size={18} />
            {t.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
