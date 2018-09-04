import {
    APP_LOAD,
    REDIRECT,
    OPEN_MENU,
    CLOSE_MENU,
    LOGOUT,
    REGISTER,
    HOME_PAGE_UNLOADED,
    PROFILE_PAGE_UNLOADED,
    REGISTER_PAGE_UNLOADED,
    LOGIN_PAGE_UNLOADED
} from "../constants/actionTypes";

const defaultState = {
    appName: 'Giteacher',
    menuOpen: false,
    tkn: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {};
        case OPEN_MENU:
            return {
                ...state, menuOpen: true
            };
        case CLOSE_MENU:
            return {
                ...state, menuOpen: false
            };
        case REDIRECT:
            return {};
        case LOGOUT:
            return {};
        case REGISTER:
            return {};
        case HOME_PAGE_UNLOADED:
        case PROFILE_PAGE_UNLOADED:
        case REGISTER_PAGE_UNLOADED:
        case LOGIN_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
}