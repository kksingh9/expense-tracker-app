import { useDispatch } from "react-redux";
import { modeActions } from "../../store/darkModeSlice";
import classes from "./ActivePremium.module.css";

const ActivatePremium = () => {
  const dispatch = useDispatch();

  const activatePremiumHandler = () => {
    dispatch(modeActions.toggleDarkMode());
  };

  return (
    <>
      <div className={classes.activate}>
        <button onClick={activatePremiumHandler}>ActivatePremium</button>
      </div>
    </>
  );
};

export default ActivatePremium;
