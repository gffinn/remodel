// src/components/ProjectTimelineGraph.tsx
import React from "react";
import { useRecoilValue } from "recoil";
import demoDataAtom from "../demoData/demoData";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import styles from "../styles/ProjectTimelineGraph.module.css";
import { DemoData, Subcategory } from "../types";

ChartJS.register(Tooltip, Legend, ArcElement);

interface ProjectTimelineGraphProps {
  category: string;
}

const ProjectTimelineGraph: React.FC<ProjectTimelineGraphProps> = ({
  category,
}) => {
  const data: DemoData = useRecoilValue(demoDataAtom);
  const categoryData = data.breakdown.find(
    (item) => item.category === category,
  );

  if (!categoryData) {
    return <div>No timeline data available for {category}</div>;
  }

  const timelineData = {
    labels: categoryData.subcategories.map((sub) => sub.item),
    datasets: [
      {
        label: "Time Spent (weeks)",
        data: categoryData.subcategories.map((sub) => sub.time ?? 0),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            const unit = value < 2 ? "Week" : "Weeks";
            return `${tooltipItem.label}: ${value} ${unit}`;
          },
        },
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <h2>{category} Timeline Breakdown</h2>
      <div className={styles.chartWrapper}>
        <Doughnut data={timelineData} options={options} />
      </div>
    </div>
  );
};

export default ProjectTimelineGraph;
