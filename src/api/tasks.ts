import axios from "./axios";

interface Task {
  title: string;
  instruction: string;
  date: Date;
  lengthMin?: number;
  points?: number;
  }

export const createTaskRequest = (groupId: string, task: Task) => axios.post(`/api/groups/${groupId}/tasks`, task);
export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (taskId: string) => axios.get(`/tasks/${taskId}`);
export const deleteTaskRequest = (taskId: string) => axios.delete(`/tasks/${taskId}`);
export const updateTaskRequest = (taskId: string, task: Task) => axios.put(`/tasks/${taskId}`, task);
