//import AddExpenses from "./AddExpenses";
import classes from "./ExpenseOnScreen.module.css";
import { expenseActions } from "../../store/expenses";
import { useDispatch, useSelector } from "react-redux";

const ExpenseOnScreen = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    try {
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
      console.log(data);
      alert("sucessfully deleted");
      //controller = null;
    } catch (err) {
      alert(err.message);
    }
  };
  const editHandler = (id) => {
    dispatch(expenseActions.updateExpenses({
      category:props.category,
      description: props.description,
      moneySpent: props.moneySpent,
      id:id
    }));
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
            <div>
              <button
                onClick={() => {
                  deleteHandler(props.id);
                }}
              >
                Delete
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
