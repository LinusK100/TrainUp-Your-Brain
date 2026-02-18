import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useDarkMode } from '../../hooks/useDarkMode';
import logo from '../../assets/images/Logo/App_TYB_Logo.png';
import heroWhite from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_1.png';
import heroDark from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_1.png';
import './hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const { theme, mounted } = useDarkMode();
  const heroImage = theme === 'dark' ? heroDark : heroWhite;

  return (
    <section className="hero" id="home">
      <div className="hero-bg-gradient" />
      <div className="hero-container">
        <div className="hero-content">
          <img src={logo} alt={t('hero.title')} className="hero-logo" />
          <h1 className="hero-title">{t('hero.title')}</h1>
          <p className="hero-tagline">{t('hero.tagline')}</p>
          <p className="hero-description">{t('hero.description')}</p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            {mounted && (
              <img
                src={heroImage}
                alt={t('hero.imageAlt')}
                className="hero-image"
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
