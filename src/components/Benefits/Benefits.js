import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { HiCube, HiClock, HiShieldCheck } from 'react-icons/hi';
import './benefits.css';

const Benefits = () => {
  const { t } = useTranslation();

  const items = [
    { key: 'holistic', icon: HiCube },
    { key: 'time', icon: HiClock },
    { key: 'privacy', icon: HiShieldCheck },
  ];

  return (
    <section className="benefits section" id="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">{t('benefits.title')}</h2>
        <div className="benefits-grid">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="benefits-card glass-card">
                <div className="benefits-icon">
                  <Icon size={32} />
                </div>
                <h3 className="benefits-card-title">{t(`benefits.${item.key}.title`)}</h3>
                <p className="benefits-card-desc">{t(`benefits.${item.key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
