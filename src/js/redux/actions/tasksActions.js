import {
    ADD_TODO,
    CLEAR_TODO,
    DELETE_TODO,
    DELETE_ALL
} from '../constants/tasks';

export const addTodo = (input) => {
    return {
        type: ADD_TODO,
        text: input.value
    }
};
export const clearTodo = (id) => {
    return {
        type: CLEAR_TODO,
        id
    }
};
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
};
export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
};
