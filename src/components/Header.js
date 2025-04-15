import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
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
  
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="/" className="logo">
          <span className="logo-text">Mi Portfolio</span>
        </a>
        
        <button className="mobile-nav-toggle" onClick={toggleMobileNav}>
          <span className={`hamburger ${mobileNavOpen ? 'active' : ''}`}></span>
        </button>
        
        <nav className={`nav ${mobileNavOpen ? 'nav-mobile-open' : ''}`}>
          <a href="#about" className="nav-link">Sobre Mí</a>
          <a href="#experience" className="nav-link">Experiencia</a>
          <a href="#projects" className="nav-link">Proyectos</a>
          <a href="#certificates" className="nav-link">Certificados</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;