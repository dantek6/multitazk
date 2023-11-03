import axios from "./axios";

interface Task {
    title: string;
    instruction: string;
    date: Date;
    groupId: string; // Cambia a ObjectId / string si lo necesitas
    adminId: string;
    lengthMin?: number;
    points?: number;
    responses: {
      userId: string;
      taskResponse: string;
    }[];
  }

export const createTaskRequest = (task: Task) => axios.post("/tasks", task);
export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (taskId: string) => axios.get(`/tasks/${taskId}`);
export const deleteTaskRequest = (taskId: string) => axios.delete(`/tasks/${taskId}`);
export const updateTaskRequest = (taskId: string, task: Task) => axios.put(`/tasks/${taskId}`, task);
