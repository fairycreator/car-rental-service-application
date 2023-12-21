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
import { useSelector } from 'react-redux';
import { selectWaterMonthStatistics } from '../../../redux/dashboard/dashboardSelectors';

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

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
const daysInMonth = getDaysInMonth(currentYear, currentMonth);
console.log(daysInMonth);

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

export const LineChartWater = () => {
    const waterFromBack = useSelector(selectWaterMonthStatistics);
    console.log('waterFromBack', waterFromBack);
    let labels = [];
    let water = [];
    let zeroWater = 0;
    const arrDayFromBack = waterFromBack?.flatMap((arr) => Number(arr.day));

    for (let i = 0; i < daysInMonth; i++) {
      if (waterFromBack) {
        if (arrDayFromBack.includes(i + 1)) {
          let item = waterFromBack?.find((item) => Number(item.day) === i + 1);
          water.push(item.value);
        } else {
          water.push(zeroWater);
          // water.push('null');
        }
        labels.push(i + 1);
      } else {
        water.push(zeroWater);
        labels.push(i + 1);
      }
    }
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
