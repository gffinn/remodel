import React from 'react';
import styles from '../styles/HeroBanner.module.css';
import heroBanner from '../images/heroBannerBlack.jpg';

interface HeroBannerProps {
  enterSite: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ enterSite }) => {
  return (
    <div className={styles.heroBanner} style={{ backgroundImage: `url(${heroBanner})` }}>
      <div className={styles.overlay}>
          <h1>Grant Finn</h1>
          <p>Showcasing Personal Projects</p>  
          <button className={styles.ctaButton} onClick={enterSite}>Enter Portfolio</button>
      </div>
    </div>
  );
};

export default HeroBanner;