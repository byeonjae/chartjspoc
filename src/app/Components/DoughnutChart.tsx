import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register( ArcElement, Legend, Tooltip );

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
      text: 'Chart.js Doughnut Chart',
    },
  },
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '%',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
        '#e0e0e0',
        'orange',
      ],
      borderColor: [
        'red',
        'blue',
        'yellow',
        'green',
        '#e0e0e0',
        'orange',
      ],
      borderWidth: 1,
    },
  ],
}

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default DoughnutChart;
