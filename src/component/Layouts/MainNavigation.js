import { NavLink,useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const MainNavigation = () => {
    const ctx = useContext(AuthContext);
    // const history = useHistory()
    const LogoutHandler = () => {
        ctx.logout();
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
               {ctx.isLoggedIn && 
               <li>
                    <button onClick={LogoutHandler}>Logout</button>
                </li>}
             </div>
            
            
        </header>
    );
};

export default MainNavigation;