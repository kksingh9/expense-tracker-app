import { Fragment } from "react"
import ExpenseDetail from "../component/Expenses/ExpenseDetail";
import AddExpenses from "../component/Expenses/AddExpenses";


const ProductPage = () => {
    return (
        <Fragment>
            <AddExpenses />
            <ExpenseDetail/>
        </Fragment>
    )
};

export default ProductPage;