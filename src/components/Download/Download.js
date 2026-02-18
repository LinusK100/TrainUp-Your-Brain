import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './download.css';

const Download = () => {
  const { t } = useTranslation();

  return (
    <section className="download section" id="download">
      <div className="download-bg-gradient" />
      <div className="download-container">
        <h2 className="download-title">{t('download.title')}</h2>
        <p className="download-subtitle">{t('download.subtitle')}</p>
      </div>
    </section>
  );
};

export default Download;
