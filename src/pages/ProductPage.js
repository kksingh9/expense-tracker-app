import { Fragment } from "react";
import ExpenseDetail from "../component/Expenses/ExpenseDetail";
import AddExpenses from "../component/Expenses/AddExpenses";
import ActivatePremium from "../component/ActivePremium/ActivePremium";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const totalExpense = useSelector((state) => state.expense.totalExpense);
  console.log(totalExpense);
  return (
    <Fragment>
      <AddExpenses />
      {totalExpense >= 10000 && <ActivatePremium />}
      <ExpenseDetail />
    </Fragment>
  );
};

export default ProductPage;
