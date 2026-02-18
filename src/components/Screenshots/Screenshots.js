import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useDarkMode } from '../../hooks/useDarkMode';
import ScreenshotGallery from './ScreenshotGallery';
import './screenshots.css';

import w1 from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_1.png';
import w2 from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_2.png';
import w3 from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_3.png';
import w4 from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_4.png';
import w5 from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_5.png';
import w6 from '../../assets/images/iPhone_White_Mode/iPhone_White_Mode_6.png';
import d1 from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_1.png';
import d2 from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_2.png';
import d3 from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_3.png';
import d4 from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_4.png';
import d5 from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_5.png';
import d6 from '../../assets/images/iPhone_Dark_Mode/iPhone_Dark_Mode_6.png';

const whiteImages = [w1, w2, w3, w4, w5, w6];
const darkImages = [d1, d2, d3, d4, d5, d6];

const Screenshots = () => {
  const { t } = useTranslation();
  const { theme, mounted } = useDarkMode();
  const images = theme === 'dark' ? darkImages : whiteImages;

  return (
    <section className="screenshots section" id="screenshots">
      <div className="screenshots-container">
        <div className="section-header">
          <h2 className="screenshots-title">{t('screenshots.title')}</h2>
        </div>
        {mounted && <ScreenshotGallery images={images} />}
      </div>
    </section>
  );
};

export default Screenshots;
