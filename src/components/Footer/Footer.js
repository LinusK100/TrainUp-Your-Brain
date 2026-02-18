import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import './footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.title')}</h3>
            <p className="footer-description">
              {t('footer.description').split('\n').map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">{t('footer.contact')}</h4>
            <p className="footer-text">
              {t('footer.contactText').split('\n').map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">{t('footer.links')}</h4>
            <div className="footer-links-grid">
              <Link to="/datenschutz" className="footer-link-item" aria-label={t('footer.privacy')}>
                {t('footer.privacy')}
              </Link>
              <Link to="/support" className="footer-link-item" aria-label={t('footer.support')}>
                {t('footer.support')}
              </Link>
              <Link to="/impressum" className="footer-link-item" aria-label={t('footer.imprint')}>
                {t('footer.imprint')}
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright', { year: currentYear })}</p>
          <p className="footer-made">{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
