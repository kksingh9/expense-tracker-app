import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const MainNavigation = () => {
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const LogoutHandler = () => {
        dispatch(authActions.logout());
    }
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/navigation/home">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/navigation/product">Expense</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/navigation/aboutus" >AboutUs</NavLink>
                </li>
            </ul>
             <div className={classes.logout}>
                {/* <li>
                    <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                </li> */}
               {isLoggedIn && 
               <li>
                    <button onClick={LogoutHandler}>Logout</button>
                </li>}
             </div>
            
            
        </header>
    );
};

export default MainNavigation;