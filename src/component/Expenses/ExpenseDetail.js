import { useEffect } from "react";
import ExpenseOnScreen from "./ExpenseOnScreen";
import { useSelector, useDispatch } from "react-redux";
import { expenseActions } from "../../store/expenses";
import { toast } from "react-toastify";
const ExpenseDetail = () => {
  //const [expenses, setExpenses] = useState([]);
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.getExpense);
  useEffect(() => {
    let setinterval = setInterval(() => {
      (async () => {
        try {
          const response = await fetch(
            "https://expenses-27efa-default-rtdb.firebaseio.com/expenses.json"
          );

          const data = await response.json();

          let newArray = [];
          for (let key in data) {
            newArray.push({
              id: key,
              moneySpent: data[key].moneySpent,
              description: data[key].description,
              category: data[key].category,
            });
          }

          dispatch(expenseActions.getExpense(newArray));
          //controller = null;
        } catch (err) {
          toast(err.message);
        }
      })();
    }, 1000);
    return () => clearInterval(setinterval);
  }, [dispatch]);

  return (
    <>
      {expenses.map((expense) => (
        <ExpenseOnScreen
          key={expense.id}
          id={expense.id}
          moneySpent={expense.moneySpent}
          description={expense.description}
          category={expense.category}
        />
      ))}
    </>
  );
};

export default ExpenseDetail;
