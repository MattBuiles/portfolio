import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Icon from './Icon';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const navItems = [
    { href: '#about', label: 'Sobre Mí', icon: 'user' },
    { href: '#experience', label: 'Experiencia', icon: 'briefcase' },
    { href: '#projects', label: 'Proyectos', icon: 'folder-open' },
    { href: '#skills', label: 'Habilidades', icon: 'code' },
    { href: '#certificates', label: 'Certificados', icon: 'certificate' },
    { href: '#contact', label: 'Contacto', icon: 'envelope' }
  ];

  const handleNavClick = (href) => {
    setMobileNavOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo" onClick={() => handleNavClick('#home')}>
            <div className="logo-container">
              <span className="logo-text">Portfolio</span>
              <span className="logo-subtitle">IA & Data Science</span>
            </div>
          </a>
          
          <nav className={`nav ${mobileNavOpen ? 'nav-mobile-open' : ''}`}>
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                <Icon name={item.icon} className="nav-icon" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
            >
              <Icon name={theme === 'light' ? 'moon' : 'sun'} />
            </button>
            
            <button 
              className={`mobile-nav-toggle ${mobileNavOpen ? 'active' : ''}`}
              onClick={toggleMobileNav}
              aria-label="Menú de navegación"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;