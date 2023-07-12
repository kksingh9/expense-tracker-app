import { useSelector } from "react-redux";

const VerifyEmailId = () => {

    const token = useSelector(state => state.auth.token)

    const VerifyEmailIdHandler = () => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBnQEvtto0FeB4KjaMBCBo2hoaTGrFe5m4',{
        method: 'POST',
        body: JSON.stringify({
            requestType : 'VERIFY_EMAIL',
           idToken: token,
        }),
        headers: {
            'Content-Type': 'application/json',
        }

    }).then((response) => {
        if(response.ok){
            return response.json();
        }else{
            // return response.json.then((data) => {
                 let errorMessage = 'Authentication failed';
                //   if (data && data.error && data.error.message){
                //         errorMessage = data.error.message;
                //   } 
                    
                  throw new Error(errorMessage);
            //})
            
        }
    })
    .then((data) => {
        console.log(data.email);
        alert('verified email successfully!');
    }).catch((err) => {
        alert(err.message);
    })
    }

    return (
        <>
        <button onClick={VerifyEmailIdHandler}>VerifyEmailId</button>
        </>
    );
};

export default VerifyEmailId;