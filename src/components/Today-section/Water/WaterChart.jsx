import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { theme } from '../../../GlobalStyle';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  aspectRatio: 0.364,
  borderRadius: 20,
  scales: {
    x: {
      ticks: { display: false, padding: 0 },
      grid: {
        drawTicks: false,
        drawBorder: false,
      },
    },

    y: {
      beginAtZero: true,
      ticks: { display: false },
      grid: {
        drawTicks: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const WaterChart = ({ waterIntake }) => {
  const data = {
    labels: ['Intake'],
    datasets: [
      {
        label: 'Water',
        data: [waterIntake],
        backgroundColor: `${theme.palette.violet.main}`,
        hoverBackgroundColor: `${theme.palette.violet.main}`,
        barPercentage: 1.001,
        categoryPercentage: 1.001,
        grouped: false,
      },
      {
        label: 'Dataset 2',
        data: [100],
        barPercentage: 1.001,
        categoryPercentage: 1.001,
      },
    ],
  };

  return <Bar data={data} options={options} />;
};
