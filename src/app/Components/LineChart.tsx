import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Legend, Tooltip, PointElement, LineElement, LinearScale, CategoryScale, Title, PolarAreaController, Filler } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index' as const,
    },
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Line Chart title',
    },
  },
};

const data = {
  labels: ['a', 'b', 'c', 'd', 'e', 'f'],
  datasets: [
    {
      label: 'Red',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'red',
      borderWidth: 1,
      backgroundColor: 'rgba(178, 34, 34, 0.2)',
      fill:true,
    },
    {
      label: 'Blue',
      data: [5, 4, 10, 8, 17, 1],
      borderColor: 'blue',
      borderWidth: 1,
      backgroundColor: 'rgba(100, 149, 237, 0.2)',
      fill:true,
    },
  ],
};

const LineChart = () => {
  return (<Line data={data} options={options}/>);

};

export default LineChart;
