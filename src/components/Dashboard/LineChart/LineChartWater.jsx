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
      tension: 0.29,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#0F0F0F',

      enabled: true,
      displayColors: false,
      usePointStyle: true,
      callbacks: {
        // To change title in tooltip
        title: (data) => {
          return data[0].parsed.y;
        },

        // To change label in tooltip
        label: () => {
          return 'milliliters';
        },
      },
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
      min: 0,
      max: 3000,
      ticks: {
        callback: (value) => `${value / 1000} L`,
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

for (let i = 0; i < 31; i++){
  labels.push(i + 1);
}


const data = {
  labels,
  datasets: [
    {
      data: [1, 1200, 1100, 2900, 1550, 1525, 1520, 1500],
    },
  ],
};

export const LineChartWater = () => {
  return <Line options={options} data={data} />;
};
