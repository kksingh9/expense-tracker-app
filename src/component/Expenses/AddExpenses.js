import { useState } from "react";

import classes from "./AddExpense.module.css";

const AddExpenses = () => {
  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  //const update = 0;
 

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
    // const expenseElement = {
    //   moneySpent: moneySpent,
    //   description: description,
    //   category: category,
    // };
    // ctx.addExpenses(expenseElement);
  
    fetch("https://react-http-4e109-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
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
       console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });

    // }else{
    //   fetch(`https://react-http-4e109-default-rtdb.firebaseio.com/expenses/${update}.json`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify({
    //       moneySpent: moneySpent,
    //       description: description,
    //       category: category,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       let errorMessage = "Authentication failed";
    //        throw new Error(errorMessage);
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    // }

    setMoneySpent("");
    setDescription("");
    setCategory("");
  };

  return (
    <>
    <div className={classes.expense}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['form-control']}>
        <div className={classes.control}>
      <label htmlFor="expense">Category</label>
        <select id="expense" value={category} onChange={categoryHandler}>
          <option value="select">select</option>
          <option value="food">Food</option>
          <option value="petrol">Petrol</option>
          <option value="salary">Salary</option>
        </select>
        </div>
        <div className={classes['control-spent']}>
        <label htmlFor="moneyspent">Money Spent</label>
        <input
          type="number"
          id="moneyspent"
          value={moneySpent}
          onChange={moneySpentHandler}
        />
        </div>
        </div>
        <div className={classes['form-control']}>
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
        <button type="submit">Add Expenses</button>
        </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default AddExpenses;
