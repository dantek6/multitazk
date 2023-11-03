import React, { createContext, ReactNode, useContext, useState } from "react";
import {
    createTaskRequest,
    getTasksRequest,
    getTaskRequest,
    deleteTaskRequest,
    updateTaskRequest,
} from "../api/tasks";

import { Task, getOneTask, ErrorData } from "../components/types/types";

interface TaskContextType {
    createTask: (task: Task) => Promise<void>;
    getTasks: () => Promise<void>;
    getTask: (taskId: string) => Promise<getOneTask | null>;
    deleteTask: (taskId: string) => Promise<void>;
    updateTask: (taskId: string, task: Task) => Promise<void>;
    tasks: Task[];
    loading: boolean;
    errorsTask: ErrorData[]; // Define cómo manejar los errores
}

const TaskContext = createContext<TaskContextType | null>(null);

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorsTask, setErrorsTask] = useState<ErrorData[]>([]);

    const createTask = async (task: Task) => {
        try {
            const res = await createTaskRequest(task);
            // Actualizar el estado de las tareas, agregar la nueva tarea, etc.
        } catch (error) {
            // Manejar errores
        }
    };

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
            // Actualizar el estado de las tareas
        } catch (error: any) {
            setErrorsTask(error.response.data);
        }
    };

    const getTask = async (taskId: string) => {
        try {
            setLoading(true);
            const res = await getTaskRequest(taskId);
            const task = res.data; // Suponiendo que el servidor devuelve la tarea
            // Actualizar el estado de la tarea específica, por ejemplo, agregarla a la lista de tareas
            return task;
        } catch (error: any) {
            setErrorsTask(error.response.data);
            return null;
        }
    };

    const deleteTask = async (taskId: string) => {
        try {
            setLoading(true);
            const res = await deleteTaskRequest(taskId);
            if (res.status === 200) {
                // Filtrar las tareas para eliminar la tarea con taskId
                const updatedTasks = tasks.filter((task) => task._id !== taskId);
                setTasks(updatedTasks);
            }
            setLoading(false);
        } catch (error: any) {
            setErrorsTask(error.response.data);
        }
    };

    const updateTask = async (taskId: string, updatedTask: Task) => {
        try {
            setLoading(true);
            const res = await updateTaskRequest(taskId, updatedTask);
            if (res.status === 200) {
                // Actualizar la tarea en el estado de las tareas
                const updatedTasks = tasks.map((task) =>
                    task._id === taskId ? { ...task, ...updatedTask } : task
                );
                setTasks(updatedTasks);
            }
            setLoading(false);
        } catch (error: any) {
            setErrorsTask(error.response.data);
        }
    };

    return (
        <TaskContext.Provider value={{ createTask, getTasks, getTask, deleteTask, updateTask, tasks, loading, errorsTask }}>
            {children}
        </TaskContext.Provider>
    );
};
