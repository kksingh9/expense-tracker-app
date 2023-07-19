import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import classes from  "./csvfile.module.css";

const Csvfile = () => {
  const expense = useSelector((state) => state.expense.getExpense);
  //console.log(expense);
  const headers = [
    {
      label: "ID",
      key: "id",
    },
    {
      label: "Category",
      key: "category",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "MoneySpent",
      key: "moneySpent",
    },
  ];

  const cvsLink = {
    filename: "file.csv",
    headers: headers,
    data: expense,
  };

  return (
    <div className={classes.file}>
        <h3> DownLoad csvfile from link below</h3>
      <CSVLink {...cvsLink}>expenses</CSVLink>
    </div>
  );
};

export default Csvfile;
