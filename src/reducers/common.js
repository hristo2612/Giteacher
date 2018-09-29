import {
    APP_LOAD,
    OPEN_MENU,
    CLOSE_MENU,
    LOGIN,
    LOGOUT,
    REGISTER,
    HOME_PAGE_UNLOADED,
    PROFILE_PAGE_UNLOADED,
    REGISTER_PAGE_UNLOADED,
    LOGIN_PAGE_UNLOADED
} from "../constants/actionTypes";

const defaultState = {
    appName: 'Gitteacher',
    token: null,
    menuOpen: false,
    currentUser: null,
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
        case LOGIN:
        case REGISTER:
            return {
                ...state,
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