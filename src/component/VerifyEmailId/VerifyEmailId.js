import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./VerifyEmailId.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../Loader/loader";

const VerifyEmailId = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);

  const VerifyEmailIdHandler = () => {
    setLoading(true)
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDYe7rxDYbi7WgXlIL3QX92DmYYVyXFWho",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // return response.json.then((data) => {
          let errorMessage = "Authentication failed";
          //   if (data && data.error && data.error.message){
          //         errorMessage = data.error.message;
          //   }

          throw new Error(errorMessage);
          //})
        }
      })
      .then((data) => {
        setLoading(false)
        toast.success("verified email successfully!");
        history.push("/navigation/home");
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className={classes.action}>
        <button onClick={VerifyEmailIdHandler}>{loading? <Loader/>:"VerifyEmailId"}</button>
      </div>
    </>
  );
};

export default VerifyEmailId;
