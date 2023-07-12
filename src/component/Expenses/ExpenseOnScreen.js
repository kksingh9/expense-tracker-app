//import AddExpenses from "./AddExpenses";
import classes from "./ExpenseOnScreen.module.css";


const ExpenseOnScreen = (props) => {
  

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(
        `https://react-http-4e109-default-rtdb.firebaseio.com/expenses/${id}.json`,
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
  }
  const editHandler = (id) =>{
      // const update = {
      //   id: props.id,
      //   category: props.category,
      //   description: props.description,
      //   moneySpent: props.moneySpent,
      // }
      //ctx.addExpenses(id)
  }
  
  return (
    <>
      <div className={classes["form-control"]}>
        <ul className={classes["control"]}>
          <li>
            <div className={classes.detail}>
              <span>{props.category}</span>
              <span>{props.description}</span>
            </div>
            <span>{props.moneySpent}</span>
          </li>
          <button
            onClick={() => {
              deleteHandler(props.id);
            }}
          >
            Delete
          </button>
          <button onClick={ () => {editHandler(props.id)}}>Edit</button>
        </ul>
      </div>
    </>
  );
};

export default ExpenseOnScreen;
