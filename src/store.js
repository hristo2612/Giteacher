import {applyMiddleware, createStore } from 'redux';
import {promiseMiddleware} from './middleware';

const defaultState = {
    appName: 'Giteacher',
    menuOpen: false,
    articles: null
};
const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles};
        case 'OPEN_MENU':
            return { ...state, menuOpen: true};
        case 'CLOSE_MENU':
            return { ...state, menuOpen: false}
    }
    return state;
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;