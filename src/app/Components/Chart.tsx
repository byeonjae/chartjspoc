import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Legend } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart title',
    },
  },
};

const labels = ['January', 'February', 'March', 'April'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [100, 200, 300, 400],
      backgroundColor: 'white',
    },
    {
      label: 'Dataset 2',
      data: [700, 600, 500, 400],
      backgroundColor: 'red',
    },
  ],
};

const TestChart = () => {
  return (
    <Chart type="bar" options={options} data={data} />
  );
};

export default TestChart;
