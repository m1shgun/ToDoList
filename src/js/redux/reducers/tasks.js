import {
    ADD_TODO,
    CLEAR_TODO,
    DELETE_TODO,
    DELETE_ALL
} from '../constants/tasks';

const initialState = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];

let count = localStorage.count ? +localStorage.count : 0;

const updateLocalStorage = (tasks) => {
    localStorage.tasks = JSON.stringify(tasks);
    localStorage.count = count;
};

const tasks = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO: {
            let tasks = [...state];
            tasks.push({
                id: ++count,
                text: action.text,
                clear: false
            });

            updateLocalStorage(tasks);
            return [...tasks]
        }

        case CLEAR_TODO: {
            let tasks = [...state];
            tasks.forEach(task => {
                if (task.id === action.id) {
                    task.clear = !task.clear;
                }
            });

            updateLocalStorage(tasks);
            return [...tasks];
        }

        case DELETE_TODO: {
            const tasks = state.filter(task => task.id !== action.id);
            if (tasks.length === 0) {
                count = 0
            }

            updateLocalStorage(tasks);
            return [...tasks];
        }

        case DELETE_ALL: {
            count = 0;

            updateLocalStorage([]);
            return [];
        }

        default:
            return state;
    }
};

export default tasks;