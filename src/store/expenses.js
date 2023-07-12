import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenses: [],
  update: 0,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialExpenseState,
  reducers: {
    addExpenses(state, action) {
      state.expenses = action.payload;
    },
    updateExpenses(state, action) {
      state.update = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
