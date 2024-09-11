import React from "react";
import styles from "../styles/TotalProjectOverview.module.css";

const KitchenCostOverview: React.FC = () => {
  return (
    <p className={styles.description}>
      Welcome to our full home renovation site, where we showcase the
      transformation of a 1964 ranch in Metro Detroit into a stunning
      mid-century modern space with dark and moody colors. Explore the before
      and after photos of each room, discover an estimated cost breakdown, and
      learn from our lessons along the way.
    </p>
  );
};

export default KitchenCostOverview;
