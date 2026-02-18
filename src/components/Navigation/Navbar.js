import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../assets/images/Logo/App_TYB_Logo.png';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useDarkMode();
  const { language, toggleLanguage, mounted: langMounted } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(targetId), 150);
    } else {
      scrollToSection(targetId);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'features', label: t('nav.features') },
    { id: 'gamification', label: t('nav.gamification') },
    { id: 'focusflow', label: t('nav.focusflow') },
    { id: 'screenshots', label: t('nav.screenshots') },
    { id: 'benefits', label: t('nav.benefits') },
    { id: 'download', label: t('nav.download') },
  ];

  if (!mounted || !langMounted) return null;

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" onClick={handleLogoClick} className="navbar-logo" aria-label={t('nav.home')}>
            <img src={logo} alt="TrainUp Your Brain" className="navbar-logo-img" />
            <span className="navbar-logo-text">TrainUp Your Brain</span>
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t('nav.menuToggle')}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="navbar-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-controls">
            <button
              className="navbar-language-toggle"
              onClick={toggleLanguage}
              aria-label={t('nav.languageToggle')}
              title={language === 'de' ? 'English' : 'Deutsch'}
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
            <button
              className="navbar-theme-toggle"
              onClick={toggleTheme}
              aria-label={t('nav.themeToggle', { theme: theme === 'light' ? 'Dark' : 'Light' })}
            >
              {theme === 'light' ? <HiMoon size={20} aria-hidden="true" /> : <HiSun size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
