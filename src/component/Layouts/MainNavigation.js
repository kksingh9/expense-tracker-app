import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/aboutus">AboutUs</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default MainNavigation;