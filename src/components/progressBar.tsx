import type { ChartData, ChartOptions } from "chart.js";
import { Chart as ChartJS, BarElement } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS.register({
  BarElement,
});

const ProgressBar = () => {
  const data: ChartData<"bar"> = {
    labels: ["Nivel"],
    datasets: [
      {
        label: "Progreso de nivel",
        data: [50],
        // backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        // borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // Puedes ajustar este valor según tu necesidad
      },
    },
  };

  return (
    <div className="ProgressBar">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressBar;
