
import classes from "./ProfileOnScreen.module.css";

const ProfileOnScreen = (props) => {
    // let photo= props.photoUrl
    // console.log(photo);
    return (
        <>
        <li className={classes.profile}>
        <img  src="https://media.istockphoto.com/id/541152916/photo/healthy-green-trees-in-forest-of-spruce-fir-and-pine.jpg?s=612x612&amp;w=is&amp;k=20&amp;c=eXfzywUFpFRbSbS-UILxTipPnBv7VTIVNGsogJV2EQU=" alt='' width='181' height='181' /><br></br>
            <span>{props.displayName}</span>
            
        </li>
        </>
    )
};

export default ProfileOnScreen;