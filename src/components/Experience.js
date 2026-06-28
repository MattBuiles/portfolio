import React from 'react';
import { useLanguage, pick } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import experienceData from '../data/experience.json';
import './Experience.css';

const Experience = () => {
  const { lang } = useLanguage();
  const t = strings[lang].experience;

  return (
    <section id="experience" className="section experience section-alt">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="exp__h-em">{t.titleEm}</em>.
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <ol className="exp__timeline reveal">
          {experienceData.map((item, index) => (
            <li key={`${pick(item.company, lang)}-${index}`} className="exp__item">
              <div className="exp__rail">
                <span className="exp__dot">
                  <Icon name={item.icon} size={14} />
                </span>
              </div>

              <article className="exp__card">
                <header className="exp__card-head">
                  <div>
                    <span className={`exp__type exp__type--${item.type}`}>
                      {t.typeLabels[item.type] ?? item.type}
                    </span>
                    <h3 className="exp__title">{pick(item.jobTitle, lang)}</h3>
                    <p className="exp__company">{pick(item.company, lang)}</p>
                  </div>
                  <span className="exp__duration">{pick(item.duration, lang)}</span>
                </header>

                {item.responsibilities?.length > 0 && (
                  <ul className="exp__responsibilities">
                    {item.responsibilities.map((r, i) => (
                      <li key={i}>
                        <span className="exp__bullet" aria-hidden="true" />
                        <span>{pick(r, lang)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
