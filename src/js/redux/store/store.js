import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../utils/devtools';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    let store;

    if (NODE_ENV === 'development') {
        store = compose(
            applyMiddleware(createLogger()),
            DevTools.instrument()
        )(createStore)(rootReducer, initialState);
    } else {
        store = createStore(rootReducer, initialState);
    }

    return store;
}
