import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth';
import expenseReducer from './expenses';
import modeReducer from './darkModeSlice';

const store = configureStore({
        reducer: {
                auth: authReducer,
                expense: expenseReducer,
                mode: modeReducer,
        },
});

export default store ;