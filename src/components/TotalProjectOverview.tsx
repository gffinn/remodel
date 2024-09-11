import React from "react";
import styles from "../styles/TotalProjectOverview.module.css";

const TotalProjectOverview: React.FC = () => {
  return (
    <section className={styles.projectOverview}>
      <h2 className={styles.title}>Renovation Journey</h2>
      <p className={styles.description}>
        Welcome to our full home renovation site, where we showcase the
        transformation of a 1964 ranch in Metro Detroit into a stunning
        mid-century modern space with dark and moody colors. Explore the before
        and after photos of each room, discover an estimated cost breakdown, and
        learn from our lessons along the way.
        <p>Your dream renovation starts here!</p>
        <p className={styles.disclaimer}>
          The current images are not actual images of the project. Real images
          will be loaded soon, along with Time Lapse video.
        </p>
      </p>
    </section>
  );
};

export default TotalProjectOverview;
