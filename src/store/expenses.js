import { createSlice } from "@reduxjs/toolkit";

const expense = JSON.parse(localStorage.getItem('expense'));
const initialExpenseState = {
    expenses : expense || [],
} 

const expenseSlice = createSlice({
    name : 'expenses',
    initialState : initialExpenseState,
    reducers : {
        addExpenses(state,action){
            state.expenses = action.payload;
            localStorage.setItem('expense',action.payload);
            console.log(action.payload);
        },
    }
})

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer ;