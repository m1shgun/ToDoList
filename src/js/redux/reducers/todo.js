const initialState = {
    tasks: [],
    filter: 'all'
};

let count = 0;

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TODO': {
            let tasks = [...state.tasks];
            tasks.push({
                id: ++count,
                text: action.text,
                clear: false
            });

            return {
                ...state,
                tasks
            }
        }

        case 'CLEAR_TODO': {
            let tasks = [...state.tasks];
            tasks.forEach(task => {
                if (task.id === action.id) {
                    task.clear = !task.clear;
                }
            });

            return {
                ...state,
                tasks
            };
        }

        case 'DELETE_TODO':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };

        case 'DELETE_ALL': {
            count = 0;

            return {
                ...state,
                tasks: []
            };
        }


        case 'CHANGE_FILTER':
            return {
                ...state,
                filter: action.filter
            };

        default:
            return state;
    }

};

export default todo;