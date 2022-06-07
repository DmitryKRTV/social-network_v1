import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from "./sidebarReducer";
import navbarFriendsMenuReducer from "./navbarFriendsMenuReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    navbarFriendsMenu: navbarFriendsMenuReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store

export default store;