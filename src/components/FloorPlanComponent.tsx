import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/FloorPlan.module.css";
import modernLivingRoom from "../images/grey-living-room-ideas-1.jpg";
import midcenturyModernKitchen from "../images/midcenturyModernKitchen.jpg";
import office from "../images/office.jpg";
import Bathroom from "../images/bathroom.jpg";
import masterBath from "../images/masterbath.jpg";
import MasterBed from "../images/masterBed.jpg";

const FloorPlanComponent: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const getLabelStyle = () => ({
    top: cursorPosition.y + 5,
    left: cursorPosition.x + 5,
  });

  return (
    <div className={styles.floorPlan}>
      <div
        className={styles.room}
        id={styles.livingRoom}
        onMouseMove={handleMouseMove}
      >
        <Link to="/livingRoom">
          <img src={modernLivingRoom} alt="Modern Living Room" />
          <div className={styles.label} style={getLabelStyle()}>
            Modern Living Room
          </div>
        </Link>
      </div>
      <div
        className={styles.room}
        id={styles.workshop}
        onMouseMove={handleMouseMove}
      >
        <Link to="/kitchen">
          <img src={midcenturyModernKitchen} alt="Midcentury Modern Kitchen" />
          <div className={styles.label} style={getLabelStyle()}>
            Midcentury Modern Kitchen
          </div>
        </Link>
      </div>
      <div
        className={styles.room}
        id={styles.office}
        onMouseMove={handleMouseMove}
      >
        <Link to="/office">
          <img src={office} alt="Office" />
          <div className={styles.label} style={getLabelStyle()}>
            Office
          </div>
        </Link>
      </div>
      <div
        className={styles.room}
        id={styles.bathroom}
        onMouseMove={handleMouseMove}
      >
        <Link to="/bathroom">
          <img src={Bathroom} alt="bathroom" />
          <div className={styles.label} style={getLabelStyle()}>
            Bathroom
          </div>
        </Link>
      </div>
      <div
        className={styles.room}
        id={styles.masterBathroom}
        onMouseMove={handleMouseMove}
      >
        <Link to="/masterBath">
          <img src={masterBath} alt="masterBathroom" />
          <div className={styles.label} style={getLabelStyle()}>
            Master Bathroom
          </div>
        </Link>
      </div>
      <div
        className={styles.room}
        id={styles.masterBed}
        onMouseMove={handleMouseMove}
      >
        <Link to="/masterBedroom">
          <img src={MasterBed} alt="masterBed" />
          <div className={styles.label} style={getLabelStyle()}>
            Master Bedroom
          </div>
        </Link>
      </div>
      <div
        className={styles.room}
        id={styles.bathroom}
        onMouseMove={handleMouseMove}
      >
        <Link to="/bathroom">
          <img src={Bathroom} alt="bathroom" />
          <div className={styles.label} style={getLabelStyle()}>
            Bathroom
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FloorPlanComponent;
