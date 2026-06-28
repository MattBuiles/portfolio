import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import strings from '../i18n/strings';
import Icon from './Icon';
import './Footer.css';

const Footer = () => {
  const { lang } = useLanguage();
  const t = strings[lang].footer;
  const year = new Date().getFullYear();
  const copy = t.copyRight.replace('{year}', year);

  return (
    <footer className="ftr">
      <div className="container">
        <div className="ftr__top">
          <div className="ftr__brand">
            <span className="ftr__mark">MB</span>
            <div>
              <p className="ftr__name">Mateo Builes Duque</p>
              <p className="ftr__role">{t.role}</p>
            </div>
          </div>

          <ul className="ftr__links">
            <li>
              <a href="https://github.com/MattBuiles" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" size={16} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/mateo-builes-73453531b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={16} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/MateB53" target="_blank" rel="noopener noreferrer" aria-label="X">
                <Icon name="twitter" size={16} />
                <span>X</span>
              </a>
            </li>
            <li>
              <a href="mailto:matebuilesd@gmail.com" aria-label="Email">
                <Icon name="envelope" size={16} />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="ftr__bottom">
          <p>{copy}</p>
          <p className="ftr__tech">{t.tech}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
