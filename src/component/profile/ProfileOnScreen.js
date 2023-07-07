
import classes from "./ProfileOnScreen.module.css";

const ProfileOnScreen = (props) => {
    return (
        <>
        <li className={classes.profile}>
        <img src={props.photoUrl} alt='' width='181' height='181' ></img><br></br>
            <span>{props.displayName}</span>
            
        </li>
        </>
    )
};

export default ProfileOnScreen;