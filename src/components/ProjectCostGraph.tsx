import React from "react";
import { useRecoilValue } from "recoil";
import demoDataAtom from "../demoData/demoData";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import styles from "../styles/ProjectCostGraph.module.css";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

interface ProjectCostGraphProps {
  category: string;
}

const ProjectCostGraph: React.FC<ProjectCostGraphProps> = ({ category }) => {
  const data = useRecoilValue(demoDataAtom);

  const categoryData = data.breakdown.find(
    (item) => item.category === category,
  );

  if (!categoryData) {
    return <div>No data available for {category}</div>;
  }

  const chartData = {
    labels: categoryData.subcategories.map((sub) => sub.item),
    datasets: [
      {
        label: "Cost Breakdown",
        data: categoryData.subcategories.map((sub) => sub.cost),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className={styles.graphContainer}>
      <h2>{category} Cost Breakdown</h2>
      <div className={styles.chartWrapper}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ProjectCostGraph;
