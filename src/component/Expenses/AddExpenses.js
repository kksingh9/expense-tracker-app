import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./AddExpense.module.css";
import { expenseActions } from "../../store/expenses";
import { toast } from "react-toastify";
import Loader from "../Loader/loader";

const AddExpenses = () => {
  const [moneySpent, setMoneySpent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const update = useSelector((state) => state.expense.update);

  useEffect(() => {
    if (update && update.id) {
      setMoneySpent(update.moneySpent);
      setDescription(update.description);
      setCategory(update.category);
    }
  }, [update]);
  const moneySpentHandler = (e) => {
    setMoneySpent(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    if (update && update.id) {
      fetch(
        `https://expenses-27efa-default-rtdb.firebaseio.com/expenses/${update.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            moneySpent: moneySpent,
            description: description,
            category: category,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            let errorMessage = "Authentication failed";
            throw new Error(errorMessage);
          }
        })
        .then((data) => {
          toast.success("Expense updated successfully!");
          setLoading(false);
          console.log(data);
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    } else {
      toast.success("Expense added successfully!");
      setLoading(true);
      dispatch(
        expenseActions.addExpenses({
          moneySpent: moneySpent,
          description: description,
          category: category,
        })
      );
      setLoading(false);
    }
    dispatch(expenseActions.updateExpenses({}));
    setMoneySpent("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
      <div className={classes.expense}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes["form-control"]}>
            <div className={classes.control}>
              <label htmlFor="expense">Category</label>
              <select id="expense" value={category} onChange={categoryHandler}>
                <option value="select">select</option>
                <option value="food">Food</option>
                <option value="petrol">Petrol</option>
                <option value="salary">Salary</option>
              </select>
            </div>
            <div className={classes["control-spent"]}>
              <label htmlFor="moneyspent">Money Spent</label>
              <input
                type="number"
                id="moneyspent"
                value={moneySpent}
                onChange={moneySpentHandler}
              />
            </div>
          </div>
          <div className={classes["form-control"]}>
            <div className={classes.control}>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={descriptionHandler}
              />
            </div>
            <div className={classes.action}>
              <button type="submit">
                {update.id ? (
                  loading ? (
                    <Loader />
                  ) : (
                    "Edit Expenses"
                  )
                ) : loading ? (
                  <Loader />
                ) : (
                  "Add Expenses"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpenses;
