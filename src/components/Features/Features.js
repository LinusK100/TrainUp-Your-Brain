import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { HiAcademicCap, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import './features.css';

const Features = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 'cognitive',
      icon: HiAcademicCap,
      color: 'var(--cognitive-blue)',
      titleKey: 'features.cognitive.title',
      descKey: 'features.cognitive.description',
      itemsKey: 'features.cognitive.items',
    },
    {
      id: 'physical',
      icon: HiLightningBolt,
      color: 'var(--physical-orange)',
      titleKey: 'features.physical.title',
      descKey: 'features.physical.description',
      itemsKey: 'features.physical.items',
    },
    {
      id: 'mindfulness',
      icon: HiSparkles,
      color: 'var(--mindfulness-green)',
      titleKey: 'features.mindfulness.title',
      descKey: 'features.mindfulness.description',
      itemsKey: 'features.mindfulness.items',
    },
  ];

  return (
    <section className="features section" id="features">
      <div className="features-container">
        <h2 className="features-title">{t('features.title')}</h2>
        <div className="features-grid">
          {cards.map((card) => {
            const Icon = card.icon;
            const items = t(card.itemsKey);
            const itemList = Array.isArray(items) ? items : [];
            return (
              <div key={card.id} className="glass-card features-card" style={{ '--card-accent': card.color }}>
                <div className="features-card-icon" style={{ color: card.color }}>
                  <Icon size={32} />
                </div>
                <h3 className="features-card-title">{t(card.titleKey)}</h3>
                <p className="features-card-desc">{t(card.descKey)}</p>
                <ul className="features-card-list">
                  {itemList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
