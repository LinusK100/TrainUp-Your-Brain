import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { HiStar } from 'react-icons/hi';
import './testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();
  const items = t('testimonials.items');
  const list = Array.isArray(items) ? items : [];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">{t('testimonials.title')}</h2>
        <div className="testimonials-rating">
          <HiStar size={24} className="testimonials-star" />
          <span className="testimonials-rating-value">{t('testimonials.rating')}</span>
          <span className="testimonials-rating-label">{t('testimonials.ratingLabel')}</span>
        </div>
        <div className="testimonials-grid">
          {list.map((item, i) => (
            <div key={i} className="testimonials-card glass-card">
              <p className="testimonials-quote">"{item.quote}"</p>
              <div className="testimonials-stars">
                {Array.from({ length: item.stars || 5 }).map((_, j) => (
                  <HiStar key={j} size={18} className="testimonials-star" />
                ))}
              </div>
              <p className="testimonials-author">– {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
