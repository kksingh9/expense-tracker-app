import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
//import VerifyEmailId from "./component/VerifyEmailId/VerifyEmailId";
import Layouts from "./component/Layouts/Layouts";
import AuthForm from "./component/Login/AuthForm";
import Navigation from "./component/LoginRouters/navigation";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import { useSelector } from "react-redux";
import { useEffect } from "react";

let initial = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const expense = useSelector((state) => state.expense.expenses);
  //const mode = useSelector((state) => state.mode.mode);
  useEffect(() => {
    const sendData = () => {
      fetch(
        "https://expenses-e01a2-default-rtdb.firebaseio.com/expenses.json",
        {
          method: "POST",
          body: JSON.stringify(expense),
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
    };
    if (initial) {
      initial = false;
      return;
    }
    sendData();
  }, [expense]);

  return (
    <div>
      <Layouts>
        <Switch>
          {isLoggedIn && <Navigation />}
          {/* <img  src="logo192.png" alt='' width='181'
         height='181' ></img> */}
          {!isLoggedIn && (
            <Route path="/login" exact>
              <AuthForm />
            </Route>
          )}

          {!isLoggedIn && (
            <Route path="/login/forgetpassword">
              <ForgetPassword />
            </Route>
          )}
          {!isLoggedIn && (
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          )}
          {!isLoggedIn && (
            <Route path="*">
              <Redirect to="/" />
            </Route>
          )}
        </Switch>
      </Layouts>
    </div>
  );
}

export default App;
