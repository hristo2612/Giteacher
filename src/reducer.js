import { combineReducers } from "redux";
import common from './reducers/common';
import auth from './reducers/auth';
import profile from './reducers/profile';
import home from './reducers/home';
import tutorial from './reducers/tutorial';
import tutorialList from './reducers/tutorialList';

export default combineReducers({
    common,
    auth,
    profile,
    home,
    tutorial,
    tutorialList
});