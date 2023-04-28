//import React from 'react';
import type { ChartData, ChartOptions } from "chart.js";
import { Chart as ChartJS, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { deleteTask } from "../features/task/taskSlice";

ChartJS.register({
  ArcElement,
});

interface Props {
  data: ChartData<"doughnut">;
}

export default function DoughnutChart() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  
  const data = {
    labels: ["Completado", "Faltante"],
    datasets: [
        {
            label: "Tasks",
            data: [
                tasks.filter((task) => task.completed).length,
                tasks.filter((task) => !task.completed).length,
            ],
            backgroundColor: ["#D1261F", "#145285"],
            hoverBackgroundColor: ["#D1261F", "#145285"],
        },
    ],
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="chartBox">
      <div className="DoughnutChart">
        <Doughnut data={data} />
      </div>
      <button onClick={() => handleDelete(tasks[tasks.length-1].id)}>Delete Last</button>
    </div>
  );
}