import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { HiLightningBolt, HiFire, HiStar, HiChartSquareBar } from 'react-icons/hi';
import './gamification.css';

const Gamification = () => {
  const { t } = useTranslation();

  const items = [
    { key: 'xp', icon: HiLightningBolt, color: 'var(--primary-blue)' },
    { key: 'streaks', icon: HiFire, color: 'var(--accent-orange)' },
    { key: 'achievements', icon: HiStar, color: 'var(--accent-yellow)' },
    { key: 'goals', icon: HiChartSquareBar, color: 'var(--primary-blue)' },
  ];

  return (
    <section className="gamification section" id="gamification">
      <div className="gamification-container">
        <h2 className="gamification-title">{t('gamification.title')}</h2>
        <div className="gamification-grid">
          {items.map((item) => {
            const Icon = item.icon;
            const title = t(`gamification.${item.key}.title`);
            const description = t(`gamification.${item.key}.description`);
            return (
              <div key={item.key} className="glass-card gamification-card">
                <div className="gamification-icon" style={{ color: item.color }}>
                  <Icon size={28} />
                </div>
                <h3 className="gamification-card-title">{title}</h3>
                <p className="gamification-card-desc">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gamification;
