import {combineReducers} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const authSlise = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        setLoggedIn: (state) => ({...state, isLoggedIn: true}),
        setLoggedOut: (state) => ({...state, isLoggedIn: false}),
    },
})
//exporter les actions
export const {setLoggedIn, setLoggedOut} = authSlise.actions;

const reducer = combineReducers({
    auth: authSlise.reducer
})

export default configureStore({
    reducer
})