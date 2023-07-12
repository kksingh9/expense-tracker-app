// import { createContext } from "react"

import { createSlice } from "@reduxjs/toolkit";

const tokenId = localStorage.getItem('token');
const initialAuthState = {
    isAuthenticated : false,
    token : tokenId,
}

const authSlice = createSlice({
    name : 'authentication',
    initialState : initialAuthState,
    reducers : {
        login(state,action){
            state.isAuthenticated = true;
            state.token = tokenId;
            localStorage.setItem('token',action.payload);
        },
        tokenId(state,action){
            
        },
        logout(state){
            state.isAuthenticated = false;
            //state.token = null;
            localStorage.removeItem('token');
        },
    }

})

export const authActions = authSlice.actions;

export default authSlice.reducer;