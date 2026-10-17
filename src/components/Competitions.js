"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import competitions from '../data/competitions.json';
import getAssetPath from '../utils/paths';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Competitions.css';

const LINK_ICON = { code: 'github', demo: 'external-link', certificate: 'certificate' };

const Competitions = () => {
  const { lang } = useLanguage();
  const t = strings[lang].competitions;

  useScrollAnimation([lang]);

  return (
    <section id="competitions" className="section competitions section-alt">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-num">{t.sectionNum}</span>
          <span className="kicker">{t.kicker}</span>
          <h2>
            {t.titleStart} <em className="competitions__h-em">{t.titleEm}</em>.
          </h2>
          <p className="lede">{t.lede}</p>
        </header>

        <ul className="competitions__list reveal reveal-delay-1">
          {competitions.map((item) => (
            <li key={item.id} className="competitions__card">
              {item.image && (
                <img
                  className="competitions__photo"
                  src={getAssetPath(item.image)}
                  alt={`${item.name} — ${t.places[item.place]}`}
                  loading="lazy"
                />
              )}
              <div className="competitions__body">
                <span className={`competitions__place competitions__place--${item.place}`}>
                  <Icon name="trophy" size={16} />
                  {t.places[item.place]}
                </span>
                <h3 className="competitions__name">{item.name}</h3>
                <p className="competitions__meta">
                  {item.organizer} · {item.year} · {item.category}
                </p>
                <p className="competitions__project">
                  <strong>{t.project}:</strong> {item.project}
                </p>
                <p className="competitions__desc">{item.description}</p>
                <div className="competitions__links">
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={LINK_ICON[link.kind]} size={16} />
                      {t.links[link.kind]}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Competitions;
