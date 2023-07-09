import { useEffect, useState } from "react";
import ExpenseOnScreen from "./ExpenseOnScreen";
//import AuthContext from "../../store/AuthContext";

const ExpenseDetail = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    //let controller = new AbortController();
    (async () => {
      try {
        const response = await fetch(
          "https://react-http-4e109-default-rtdb.firebaseio.com/expenses.json")

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
        
        setExpenses(newArray);
        //controller = null;
      } catch (err) {
        alert(err.message);
      }
    })();
    //return () => controller?.abort();
  }, []);

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
