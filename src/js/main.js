import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import configureStore from './redux/store/store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("content")
);
