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
import { selectCaloriesMonthStatistics } from '../../../redux/dashboard/dashboardSelectors';
import { useSelector } from 'react-redux';

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
          return 'calories';
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

export const LineChartCalories = () => {
  const caloriesFromBack = useSelector(selectCaloriesMonthStatistics);
  let labels = [];
  let calories = [];
  let zeroCalories = 0;
  const arrDayFromBack = caloriesFromBack?.flatMap((arr) => Number(arr.day));

  for (let i = 0; i < daysInMonth; i++) {
    if (caloriesFromBack) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = caloriesFromBack?.find((item) => Number(item.day) === i + 1);
        calories.push(item.value);
      } else {
        // calories.push(zeroCalories);
        calories.push('null');
      }
      labels.push(i + 1);
    } else {
      calories.push(zeroCalories);
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
            data: calories,
          },
        ],
      }}
    />
  );
};
