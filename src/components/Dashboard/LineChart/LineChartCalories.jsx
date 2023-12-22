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
      radius: 0.5,
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
        xAlign: 'left',
        yAlign: 'bottom',
      callbacks: {
        title: (data) => {
          return data[0].parsed.y;
        },
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
  const arrDayFromBack = caloriesFromBack?.flatMap((item) =>
    new Date(item.date).getDate()
  );

  for (let i = 0; i < daysInMonth; i++) {
    if (caloriesFromBack) {
      if (arrDayFromBack.includes(i + 1)) {
        let item = caloriesFromBack?.find(
          (item) => new Date(item.date).getDate() === i + 1
        );
        calories.push(item.value);
      } else {
        calories.push(zeroCalories);
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
