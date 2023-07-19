// import { createContext } from "react"

import { createSlice } from "@reduxjs/toolkit";

const tokenId = localStorage.getItem("token")

// function xyz(){
//  const token = !!(tokenId) || (false) ;
//  return token;
//   }

const initialAuthState = {
 
  isAuthenticated: !!(tokenId) || (false) ,
  token:"" ,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      //debugger;
      state.isAuthenticated = !state.isAuthenticated;
      
      state.token = action.payload;
      localStorage.setItem("token", state.token);
    },
   
    logout(state) {
      state.isAuthenticated = false;
      
      localStorage.removeItem("token");
      
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
