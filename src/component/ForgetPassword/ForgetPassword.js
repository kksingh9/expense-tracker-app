import { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./ForgetPassword.module.css";
import { toast } from "react-toastify";
import Loader from "../Loader/loader"

const ForgetPassword = () => {
  const enterEmailInputRef = useRef();
  const history = useHistory();
  const [loading,setLoading] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enterEmailInputRef.current.value;
    setLoading(true)
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDYe7rxDYbi7WgXlIL3QX92DmYYVyXFWho",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
        
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          
        }
      })
      .then((data) => {
     
        toast.success('Email sent successfully check your email!')
        history.push('/login');
        setLoading(false)
        
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false)
      });
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.password}>
        <h3>Expense Tracker</h3>
        <input
          type="email"
          id="emailId"
          ref={enterEmailInputRef}
          placeholder="email"
        /><br></br>
        <button>{loading ? <Loader/>:"Send Link"}</button>
      </form>
    </>
  );
};

export default ForgetPassword;
