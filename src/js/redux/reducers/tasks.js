import {
    ADD_TODO,
    CLEAR_TODO,
    DELETE_TODO,
    DELETE_ALL
} from '../constants/tasks';

const initialState = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

let count = localStorage.count ? +localStorage.count : 0;

const tasks = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO: {
            let tasks = [...state];
            tasks.push({
                id: ++count,
                text: action.text,
                clear: false
            });

            localStorage.tasks = JSON.stringify(tasks);
            localStorage.count = count;
            return [...tasks]
        }

        case CLEAR_TODO: {
            let tasks = [...state];
            tasks.forEach(task => {
                if (task.id === action.id) {
                    task.clear = !task.clear;
                }
            });

            localStorage.tasks = JSON.stringify(tasks);
            return [...tasks];
        }

        case DELETE_TODO: {
            const tasks = state.filter(task => task.id !== action.id);
            if (tasks.length === 0) {
                count = 0
            }

            localStorage.tasks = JSON.stringify(tasks);
            localStorage.count = count;
            return [...tasks];
        }

        case DELETE_ALL: {
            count = 0;

            localStorage.tasks = JSON.stringify([]);
            localStorage.count = count;
            return [];
        }

        default:
            return state;
    }
};

export default tasks;