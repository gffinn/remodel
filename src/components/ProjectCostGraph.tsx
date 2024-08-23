import React from 'react';
import { useRecoilValue } from 'recoil';
import demoDataAtom from '../demoData/demoData';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register components needed for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface ProjectCostGraphProps {
  category: string; // Add a category prop to filter data
}

const ProjectCostGraph: React.FC<ProjectCostGraphProps> = ({ category }) => {
  const data = useRecoilValue(demoDataAtom);

  // Find the breakdown for the selected category
  const categoryData = data.breakdown.find(item => item.category === category);

  // Return null if no data is available for the selected category
  if (!categoryData) {
    return <div>No data available for {category}</div>;
  }

  // Prepare data for the chart
  const chartData = {
    labels: categoryData.subcategories.map(sub => sub.item),
    datasets: [
      {
        label: 'Cost Breakdown',
        data: categoryData.subcategories.map(sub => sub.cost),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
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
    <div>
      <h2>{category} Cost Breakdown</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ProjectCostGraph;
