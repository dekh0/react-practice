import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
//import dialogsReducer from "./dialogs-reducer";
//import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({ profilePage: profileReducer });

let store = createStore(reducers);


export default store;