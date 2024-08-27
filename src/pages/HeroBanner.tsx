import React from 'react';
import styles from '../styles/HeroBanner.module.css';
import heroBanner from '../images/blue-background.jpg'
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => {



    return (
      <div className={styles.heroBanner} style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className={styles.overlay}>
          <h1>Grant Finn</h1>
          <p>Showcasing Personal Projects</p>  
          <Link to='/home'>
          <button className={styles.ctaButton}>Explore My Portfolio</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;