// src/pages/Kitchen.tsx
import React from "react";
import Header from "../components/Header";
import ProjectCostGraph from "../components/ProjectCostGraph";
import ProjectTimelineGraph from "../components/ProjectTimelineGraph";
import styles from "../styles/Kitchen.module.css";
import KitchenCostOverview from "../components/KitchenCostOverview";

const Kitchen: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Kitchen</h1>
      <div className={styles.cost}>
        <ProjectCostGraph category="Kitchen" />
        <div className={styles.overviewWrapper}>
          <KitchenCostOverview />
        </div>
      </div>
      <div className={styles.timeline}>
        <ProjectTimelineGraph category="Kitchen" />
      </div>
    </>
  );
};

export default Kitchen;
