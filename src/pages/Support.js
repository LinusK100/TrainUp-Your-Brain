import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import './Support.css';

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">{t('support.title')}</h1>
        <div className="page-section">
          <h2 className="page-heading">{t('support.section1.title')}</h2>
          <p className="page-text">{t('support.section1.content')}</p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('support.section2.title')}</h2>
          <p className="page-text">{t('support.section2.content')}</p>
        </div>
        <div className="page-section">
          <h2 className="page-heading">{t('support.section3.title')}</h2>
          <p className="page-text">{t('support.section3.content')}</p>
          <p className="page-text">
            {t('support.section3.email')}{' '}
            <a href={`mailto:${t('support.section3.emailAddress')}`} className="support-email-link">
              {t('support.section3.emailAddress')}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
