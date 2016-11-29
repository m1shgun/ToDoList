import { CHANGE_FILTER } from '../constants/filter';

export const changeFilter = (filter) => {
    return {
        type: CHANGE_FILTER,
        filter
    }
};
