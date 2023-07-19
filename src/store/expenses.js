import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  expenses: null,
  getExpense: [],
  totalExpense: 0,
  update: "",
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialExpenseState,
  reducers: {
    addExpenses(state, action) {
      const items = action.payload;

      state.expenses = {
        moneySpent: items.moneySpent,
        description: items.description,
        category: items.category,
      };
    },
    getExpense(state, action) {
      state.getExpense = action.payload;
      let sum = state.getExpense.reduce((curr, prev) => {
        return curr + parseInt(prev.moneySpent);
      }, 0);
      state.totalExpense = sum;
    },
    updateExpenses(state, action) {
      state.update = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
