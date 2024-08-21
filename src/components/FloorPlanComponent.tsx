import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/FloorPlan.module.css';

const FloorPlanComponent: React.FC = () => {
  return (
    <div className={styles.floorPlan}>
      <div className={styles.room} id={styles.livingRoom}>
        <Link to="/about">Living Room </Link>
      </div>
      <div className={styles.room} id={styles.workshop}>
        <Link to="/projects">Kitchen </Link>
      </div>
      <div className={styles.room} id={styles.office}>
        <Link to="/office">Office </Link>
      </div>
      <div className={styles.room} id={styles.bathroom}>
        <Link to="/bathroom">Bathroom </Link>
      </div>
      <div className={styles.room} id={styles.bedroom}>
        <Link to="/bedroom">Bedroom </Link>
      </div>
      <div className={styles.room} id={styles.masterBedroom}>
        <Link to="/masterBedroom">Master Bedroom </Link>
      </div>
      <div className={styles.room} id={styles.masterBath}>
        <Link to="/masterBath">Master Bath </Link>
      </div>
    </div>
  );
};

export default FloorPlanComponent;
