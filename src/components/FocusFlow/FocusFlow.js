import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './focusflow.css';

const FocusFlow = () => {
  const { t } = useTranslation();
  const items = t('focusflow.items');
  const itemList = Array.isArray(items) ? items : [];

  return (
    <section className="focusflow section" id="focusflow">
      <div className="focusflow-container">
        <h2 className="focusflow-title">{t('focusflow.title')}</h2>
        <p className="focusflow-description">{t('focusflow.description')}</p>
        <ul className="focusflow-list">
          {itemList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FocusFlow;
