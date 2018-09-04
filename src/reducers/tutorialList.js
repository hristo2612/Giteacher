import {
    SET_PAGE,
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case SET_PAGE:
            return {};
        case HOME_PAGE_LOADED:
            return {};
        case HOME_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
}