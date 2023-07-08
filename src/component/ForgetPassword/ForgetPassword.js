import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ForgetPassword = () => {
  const enterEmailInputRef = useRef();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = enterEmailInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBnQEvtto0FeB4KjaMBCBo2hoaTGrFe5m4",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: enteredEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
        
            let errorMessage = "Authentication failed";

            throw new Error(errorMessage);
          
        }
      })
      .then((data) => {
        console.log(data.email);
        alert('Email sent successfully check your email!')
        history.push('/login');
        
        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          id="emailId"
          ref={enterEmailInputRef}
          placeholder="email"
        />
        <button>Send Link</button>
      </form>
    </>
  );
};

export default ForgetPassword;
