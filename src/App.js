import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
//import VerifyEmailId from "./component/VerifyEmailId/VerifyEmailId";
import Layouts from "./component/Layouts/Layouts";
import AuthForm from "./component/Login/AuthForm";
import Navigation from "./component/LoginRouters/navigation";
import ForgetPassword from "./component/ForgetPassword/ForgetPassword";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

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
