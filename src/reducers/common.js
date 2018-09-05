import {
    APP_LOAD,
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
    token: null,
    menuOpen: false,
    currentUser: null,
    goTo: null,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true,
                currentUser: action.payload ? action.payload.user : null
            };
        case OPEN_MENU:
            return {
                ...state, menuOpen: true
            };
        case CLOSE_MENU:
            return {
                ...state, menuOpen: false
            };
        case LOGOUT:
        case REGISTER:
            return {
                ...state,
                goTo: action.error ? null : '/',
                token: action.error ? null : action.payload.user.token,
                currentUser: action.error ? null : action.payload.user
            };
        // case HOME_PAGE_UNLOADED:
        // case PROFILE_PAGE_UNLOADED:
        // case REGISTER_PAGE_UNLOADED:
        // case LOGIN_PAGE_UNLOADED:
        //     return {};
        default:
            return state;
    }
}