import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/FloorPlan.module.css';
import modernLivingRoom from '../images/grey-living-room-ideas-1.jpg';
import midcenturyModernKitchen from '../images/midcenturyModernKitchen.jpg'


const FloorPlanComponent: React.FC = () => {
  return (
    <div className={styles.floorPlan}>
      <div className={styles.room} id={styles.livingRoom}>
        <Link to="/about">
            <img src={modernLivingRoom} alt='Modern Living Room' />
        </Link>
      </div>
      <div className={styles.room} id={styles.workshop}>
        <Link to="/projects"> 
            <img src={midcenturyModernKitchen} alt='Midcentury Modern Kitchen'/>
        </Link>
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
