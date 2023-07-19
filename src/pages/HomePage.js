import { Fragment } from "react";
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Csvfile from "../component/csvfile/csvfile";

const HomePage = () => {
    return (
        <Fragment>
            <header >
                <div className={classes.header}>
                <p>Welcome to expense tracker!</p>
                <span>Your profile is incomplete
                    {/* <button> */}
                   {" "}<Link to='/navigation/home/profilepage'>Complete now</Link> 
                    {/* </button>  */}
                    </span>
                </div>
                <hr></hr>
                <Csvfile />
            </header>
        </Fragment>
    );
};

export default HomePage;