import { CHANGE_FILTER } from '../constants/filter';

const initialState = 'all';

const filter = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_FILTER:
            return action.filter;

        default:
            return state;

    }

};

export default filter;