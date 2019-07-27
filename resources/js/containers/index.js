import React from 'react';
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from '../reducers';
import AppRouter from './AppRouter';

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

if (document.getElementById('example')) {
    ReactDOM.render(
        <Provider store={store}>
            <AppRouter />
        </Provider>,
        document.getElementById('example')
    );
}
