import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index' as const,
    },
    legend: {
      display: true,
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Bar Chart title',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 300, 400, 500, 600, 700],
      backgroundColor: 'white',
    },
    {
      label: 'Dataset 2',
      data: [700, 600, 500, 400, 300, 200, 100],
      backgroundColor: 'red',
      borderWidth: 5
    },
  ],
};

const BarChart = () => {
  return (
    <Bar options={options} data={data} />
  );
};

export default BarChart;
