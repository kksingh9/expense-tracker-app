import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { modeActions } from "../../store/darkModeSlice";
const MainNavigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(authActions.logout());
  };

  const toggleHandler = () => {
    dispatch(modeActions.toggleDarkMode());
  };
  return (
    <header className={`${classes.header} `}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/navigation/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/navigation/product">
            Expense
          </NavLink>
        </li>
      </ul>
      <div className={classes.logout}>
        {isLoggedIn && <button onClick={LogoutHandler}>Logout</button>}
        <button onClick={toggleHandler}>Dark Mode</button>
      </div>
    </header>
  );
};

export default MainNavigation;
