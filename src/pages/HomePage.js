import { Fragment } from "react";
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Fragment>
            <header >
                <div className={classes.header}>
                <p>Welcome to expense tracker!</p>
                <span>Your profile is incomplete
                    {/* <button> */}
                   {" "}<Link to='profilepage'>Complete now</Link> 
                    {/* </button>  */}
                    </span>
                </div>
                <hr></hr>
            </header>
        </Fragment>
    );
};

export default HomePage;