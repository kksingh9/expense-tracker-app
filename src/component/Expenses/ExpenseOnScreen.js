//import AddExpenses from "./AddExpenses";
import classes from "./ExpenseOnScreen.module.css";
import { expenseActions } from "../../store/expenses";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader/loader";

const ExpenseOnScreen = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const deleteHandler = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://expenses-27efa-default-rtdb.firebaseio.com/expenses/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      toast.success("sucessfully deleted");
      setLoading(false);
      //controller = null;
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  const editHandler = (id) => {
    dispatch(
      expenseActions.updateExpenses({
        category: props.category,
        description: props.description,
        moneySpent: props.moneySpent,
        id: id,
      })
    );
  };

  return (
    <>
      <div className={classes["form-control"]}>
        <ul className={classes["control"]}>
          <li>
            <div className={classes.detail}>
              <span>{props.category}</span>
              <span>{props.description}</span>
            </div>
            <div>
              <span>{props.moneySpent}</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "2",
              }}
            >
              <button
                onClick={() => {
                  deleteHandler(props.id);
                }}
              >
                {loading ? <Loader /> : "Delete"}
              </button>
              <button
                onClick={() => {
                  editHandler(props.id);
                }}
              >
                Edit
              </button>
            </div>
            {/* {totalExpense} */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ExpenseOnScreen;
