import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task 1",
        time: 30,
        description: "Task 1 description",
        completed: true
    },
    {
        id: "2",
        title: "Task 2",
        time: 60,
        description: "Task 2 description",
        completed: false
    },
    {
        id: "3",
        title: "Task 3",
        time: 90,
        description: "Task 3 description",
        completed: true
    },
    {
        id: "4",
        title: "Task 4",
        time: 120,
        description: "Task 4 description",
        completed: false,
    },
    {
        id: "5",
        title: "Task 5",
        time: 150,
        description: "Task 5 description",
        completed: true,
    },
    {
        id: "6",
        title: "Task 6",
        time: 180,
        description: "Task 6 description",
        completed: false,
    },
]

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload);

            if (taskFound){
                state.splice(state.indexOf(taskFound), 1);
            }
        }
    }
})

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;