import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    bindActionCreators
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import bookReducer from './reducers/bookReducer';
import * as routeActions from './actions/routeActions';

import BookApp from './apps/BookApp';

const store = applyMiddleware(promiseMiddleware())(createStore)(
    combineReducers({
        book: bookReducer
    })
);

const boundRouteActions = bindActionCreators(routeActions, store.dispatch);

const wrapper = (Component) => {
    return (props) => {
        return (
            <Provider store={store} >
                <Component {...props} />
            </Provider>
        );
    };
}

const routes = (
    <Router history={hashHistory} >
        <Route path={'/books'} >
            <Route
                path={':id'}
                component={wrapper(BookApp)}
                onEnter={boundRouteActions.initializeBook}/>
        </Route>
    </Router>
);

render (
    routes,
    document.getElementById('app')
);
