import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { AuthReducer } from "./Reducers/AuthReducer";
import ProfileReducer from "./Reducers/ProfileReducer";
import thunk from "redux-thunk";
import { SchoolmatesReducer } from "./Reducers/SchoolmatesReducer";
import StatusReducer from "./Reducers/StatusReducer";
import { reducer as formReducer } from 'redux-form'
import DialogsReducer from "./Reducers/DialogsReducer";

const reducers = combineReducers({  
    profileReducer:ProfileReducer,
    authReducer:AuthReducer,
    schoolmatesReducer:SchoolmatesReducer,
    statusReducer:StatusReducer,
    form: formReducer,
    dialogsReducer:DialogsReducer,
})

const store = createStore(reducers,applyMiddleware(thunk))
export default store;
window.store=store;
