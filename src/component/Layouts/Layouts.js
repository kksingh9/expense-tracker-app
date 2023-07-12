import { Fragment } from "react";
//import MainNavigation from "./MainNavigation";
//import { useSelector } from "react-redux";


const Layouts = (props) => {
    //const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
    return(
        <Fragment>
             {/* {isLoggedIn &&
                <MainNavigation /> } */}
                <main>{props.children}</main>
        
        </Fragment>
    );
};

export default Layouts;