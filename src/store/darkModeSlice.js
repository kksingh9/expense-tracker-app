import { createSlice } from "@reduxjs/toolkit";

const initialModeState = {
    mode : JSON.parse(localStorage.getItem("darkMode")) || false,
}

const darkModeSlice = createSlice({
    name: "darkmode",
    initialState: initialModeState,
    reducers: {
        toggleDarkMode : (state) => {
            state.mode = !state.mode;
            localStorage.setItem("darkMode", JSON.stringify(state.mode));
        }
    }
});

export const modeActions = darkModeSlice.actions;

export default darkModeSlice.reducer;
