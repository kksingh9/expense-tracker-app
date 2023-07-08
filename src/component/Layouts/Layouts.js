import { Fragment, useContext } from "react";
import MainNavigation from "./MainNavigation";
import AuthContext from "../../store/AuthContext";


const Layouts = (props) => {
    const ctx = useContext(AuthContext);
    const isLoggedIn = ctx.isLoggedIn;
    return(
        <Fragment>
             {isLoggedIn &&
                <MainNavigation /> }
                <main>{props.children}</main>
        
        </Fragment>
    );
};

export default Layouts;