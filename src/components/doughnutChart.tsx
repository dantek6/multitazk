//import React from 'react';
import type { ChartData, ChartOptions } from "chart.js";
import { Chart as ChartJS, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { deleteTask } from "../features/task/taskSlice";
import {FC} from "react";

ChartJS.register({
  ArcElement,
});

const DoughnutChart = () =>{
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  
  const data: ChartData<"doughnut"> = {
    labels: ["Completado", "Faltante"],
    datasets: [
        {
            label: "Tasks",
            data: [
                tasks.filter((task) => task.completed).length,
                tasks.filter((task) => !task.completed).length,
            ],
            backgroundColor: ["#df3e23", "#285cc4"],
            hoverBackgroundColor: ["#df3e23", "#285cc4"],
        },
    ],
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="chartBox">
      <div className="DoughnutChart">
        <Doughnut data={data} options={{ maintainAspectRatio: false }}/>
      </div>
      <button onClick={() => handleDelete(tasks[tasks.length-1].id)}>Delete Last</button>
    </div>
  );
}

export default DoughnutChart;