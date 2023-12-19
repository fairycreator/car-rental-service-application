import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const options = {
  elements: {
    point: {
      backgroundColor: '#E3FFA8',
      borderWidth: 1,
      radius: 5,
      hoverRadius: 4,
    },
    line: {
      backgroundColor: '#E3FFA8',
      borderColor: '#E3FFA8',
      borderWidth: 1,
      tension: 0.5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#0F0F0F',
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        color: '#292928',
        weight: '1px',
      },
    },
    y: {
      max: 3000,
      ticks: {
        callback: (value) => `${value / 1000} K`,
        stepSize: 1000,
      },
      grid: {
        color: '#292928',
        weight: '1px',
      },
    },
  },
};

let labels = [];

for (let i = 0; i < 31; i++) {
  labels.push(i + 1);
}


const data = {
  labels,
  datasets: [
    {
      data: [1, 1525, 1520, 1100, 1550, 1525, 1520, 1500],
    },
  ],
};

export const LineChartCalories = () => {
  return <Line options={options} data={data} />;
};
