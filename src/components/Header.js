import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import strings from '../i18n/strings';
import './Header.css';

const NAV_KEYS = [
  { href: '#about', key: 'about', num: '01' },
  { href: '#skills', key: 'stack', num: '02' },
  { href: '#projects', key: 'work', num: '03' },
  { href: '#experience', key: 'path', num: '04' },
  { href: '#certificates', key: 'credentials', num: '05' },
  { href: '#contact', key: 'contact', num: '06' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const t = strings[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`hdr ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="hdr__inner container-wide">
        <a
          href="#home"
          className="hdr__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
        >
          <span className="hdr__logo-mark" aria-hidden="true">MB</span>
          <span className="hdr__logo-text">Mateo Builes</span>
        </a>

        <nav className={`hdr__nav ${open ? 'is-open' : ''}`}>
          {NAV_KEYS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hdr__link"
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
            >
              <span className="hdr__link-num">{item.num}</span>
              <span className="hdr__link-label">{t[item.key]}</span>
            </a>
          ))}
        </nav>

        <div className="hdr__actions">
          <button
            type="button"
            className="hdr__btn hdr__btn--lang"
            onClick={toggleLang}
            aria-label={t.toggleLang}
            title={t.toggleLang}
          >
            <span className="hdr__lang-active">{lang.toUpperCase()}</span>
            <span className="hdr__lang-inactive">{lang === 'en' ? 'ES' : 'EN'}</span>
          </button>

          <button
            type="button"
            className="hdr__btn"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t.themeToDark : t.themeToLight}
          >
            {theme === 'light' ? <Moon size={16} strokeWidth={1.75} /> : <Sun size={16} strokeWidth={1.75} />}
          </button>

          <button
            type="button"
            className="hdr__btn hdr__btn--menu"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.closeMenu : t.openMenu}
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
