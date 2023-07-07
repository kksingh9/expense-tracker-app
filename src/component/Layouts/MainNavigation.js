import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";

const MainNavigation = () => {
    const ctx = useContext(AuthContext);

    const LogoutHandler = () => {

    }
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/navigation">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/aboutus">AboutUs</NavLink>
                </li>
            </ul>
             <div className={classes.logout}>
                <li>
                    <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                </li>
               {ctx.isLoggedIn && 
               <li>
                    <button onClick={LogoutHandler}>Logout</button>
                </li>}
             </div>
            
            
        </header>
    );
};

export default MainNavigation;