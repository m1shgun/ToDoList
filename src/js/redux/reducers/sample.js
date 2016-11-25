const initialState = {
    value: 0
};

const sample = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_ONE':
            return {
                value: state.value + 1
            };
        case 'ACTION_TWO':
            return {
                value: 0
            };
        default:
            return state;
    }

};

export default sample;