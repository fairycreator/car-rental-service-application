// export const LineChart = () => {
//   return (
//     <div>LineChart</div>
//   )
// }
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
  responsive: true,
  scales: {
    y: { // defining min and max so hiding the dataset does not change scale range
      min: 0,
      max: 3000,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      data: [1752,1525,1420,1800],
      borderColor: '#E3FFA8',
      backgroundColor: '#E3FFA8',
    },
  ],
};

export const LineChart = () => {
  return <Line options={options} data={data} />;
}