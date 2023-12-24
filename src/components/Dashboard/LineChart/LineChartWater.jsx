import { useSelector } from 'react-redux';
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

import { selectWaterMonthStatistics } from '../../../redux/monthStatistics/dashboardSelectors';
import { printChartWater } from '../../../helpers/dashboard/printChartWater';


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
      radius: 0.9,
      hoverRadius: 5,
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
      events: ['click'],
      backgroundColor: '#0F0F0F',
      titleColor: '#FFFFFF',
      bodyColor: '#B6B6B6',
      bodyAlign: 'center',
      caretSize: 0,
      cornerRadius: 8,
      padding: {
        top: 8,
        right: 6,
        bottom: 8,
        left: 6,
      },
      titleMarginBottom: 2,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 3,
      enabled: true,
      displayColors: false,
      usePointStyle: true,
      titleFont: {
        family: 'Poppins500',
        size: 32,
        lineHeight: 1.18,
        weight: 'normal',
      },
      bodyFont: {
        family: 'Poppins400',
        size: 14,
        lineHeight: 1.4,
        weight: 'normal',
      },
      xAlign: '10px',
      yAlign: 'bottom',
      callbacks: {
        title: (data) => {
          return data[0].parsed.y;
        },
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
        callback: (value) => {
          if (value > 0) return `${value / 1000} L`;
          return 0;
        },
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

export const LineChartWater = ({ month }) => {
  const waterFromBack = useSelector(selectWaterMonthStatistics);
  const newArrOfWater = printChartWater(waterFromBack, month);
  const labels = newArrOfWater.days;
  const water = newArrOfWater.values;

  return (
    <Line
      options={options}
      data={{
        labels,
        datasets: [
          {
            data: water,
          },
        ],
      }}
    />
  );
};
