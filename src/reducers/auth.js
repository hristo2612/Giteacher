import {
    ASYNC_START,
    LOGIN,
    REGISTER,
    LOGIN_PAGE_UNLOADED,
    REGISTER_PAGE_UNLOADED,
    UPDATE_FIELD_AUTH
} from "../constants/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
        case REGISTER:
            return {

            };
        case LOGIN_PAGE_UNLOADED:
        case REGISTER_PAGE_UNLOADED:
            return {};
        case ASYNC_START:
            return {};
        case UPDATE_FIELD_AUTH:
            return {};
        default:
            return state;
    }
}