import { useContext, useEffect, useState } from "react";
import ProfileOnScreen from "./ProfileOnScreen";
import AuthContext from "../../store/AuthContext";

const ProfileDetail = () => {
  const ctx = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const tokenId = ctx.token;

useEffect(() => {
  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBnQEvtto0FeB4KjaMBCBo2hoaTGrFe5m4",
    {
      method: "POST",
      body: JSON.stringify({
        idToken: tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json;
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
      console.log(data);
      // const profileData = {
      //     displayName : data.displayName,
      //     photoUrl : data.
      // }
      setUserData([...data]);
    })
    .catch((err) => {
      alert(err.message);
    });

}, [tokenId]);

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
