import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import './About.css';

const INTEREST_ICONS = ['robot', 'brain', 'chart-line', 'project-diagram', 'eye', 'comment', 'flask', 'code'];
const VALUE_ICONS = ['lightbulb', 'rocket', 'comments', 'fire'];

const About = () => {
  const { lang } = useLanguage();
  const t = strings[lang].about;

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <header className="section-header about__header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="about__h-em">{t.titleEm}</em>.
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <div className="about__grid">
          <article className="about__story reveal">
            {t.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </article>

          <aside className="about__info reveal reveal-delay-1">
            <h3 className="about__sub">{t.infoTitle}</h3>
            <dl className="about__info-list">
              {t.info.map((info) => (
                <div key={info.label} className="about__info-row">
                  <dt>{info.label}</dt>
                  <dd>{info.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="about__lower">
          <section className="about__interests reveal">
            <h3 className="about__sub">{t.interestsTitle}</h3>
            <ul className="about__interests-list">
              {t.interests.map((name, i) => (
                <li key={name} className="about__interest">
                  <Icon name={INTEREST_ICONS[i] || 'tag'} size={16} className="about__interest-icon" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="about__values reveal reveal-delay-1">
            <h3 className="about__sub">{t.valuesTitle}</h3>
            <ol className="about__values-list">
              {t.values.map((value, i) => (
                <li key={value.title} className="about__value">
                  <span className="about__value-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="about__value-body">
                    <div className="about__value-head">
                      <Icon name={VALUE_ICONS[i] || 'lightbulb'} size={16} className="about__value-icon" />
                      <h4>{value.title}</h4>
                    </div>
                    <p>{value.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="about__cta reveal">
          <p className="about__cta-text">{t.ctaText}</p>
          <button type="button" className="btn btn-primary" onClick={scrollToContact}>
            <Icon name="paper-plane" size={18} />
            {t.ctaBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
