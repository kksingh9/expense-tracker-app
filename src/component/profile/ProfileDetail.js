import { useEffect, useState } from "react";
import ProfileOnScreen from "./ProfileOnScreen";
import { useSelector } from "react-redux";

const ProfileDetail = () => {
  const token = useSelector(state => state.auth.token);
  const [userData, setUserData] = useState([]);


useEffect(() => {
  fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDYe7rxDYbi7WgXlIL3QX92DmYYVyXFWho",
    {
      method: "POST",
      body: JSON.stringify({
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
      console.log(data.users);
      // const profileData = {
      //     displayName : data.displayName,
      //     photoUrl : data.
      // }
      const user = data.users
      setUserData([...user]);
    })
    .catch((err) => {
      alert(err.message);
    });

}, [token]);

  return (
    <>
      {userData.map((data) => (
        <ProfileOnScreen
          key={data.localId}
          displayName={data.displayName}
          photoUrl={data.photoUrl}
        />
      ))}
    </>
  );
};

export default ProfileDetail;
