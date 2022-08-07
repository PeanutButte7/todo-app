import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Task} from '../components/Tasks/Task';
import { v4 as uuidv4 } from 'uuid';

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: []
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<String>) => {
            state.tasks.push({
                id: uuidv4(),
                name: action.payload,
                completed: false
            })
        },
        complete: (state, action: PayloadAction<String>) => {
            // find element in array by id and remove it
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].completed = true;
        },
        restore: (state, action: PayloadAction<String>) => {
            // find element in array by id and restore it
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].completed = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { add, complete, restore } = tasksSlice.actions

export default tasksSlice.reducer