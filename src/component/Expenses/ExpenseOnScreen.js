import classes from './ExpenseOnScreen.module.css'

const ExpenseOnScreen = (props) => {
  return (
    <>
    <div className={classes['form-control']}>
        <ul className={classes['control']}>
            <li>
                <div className={classes.detail}>
                <span>{props.category}</span>
                <span>{props.description}</span>
                </div>
                <span>{props.moneySpent}</span>
            </li>
      </ul>
      </div>
    </>
  );
};

export default ExpenseOnScreen;
