
import React, { useState, useRef } from 'react';
import {useHistory} from "react-router-dom";
import classes from './AuthForm.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    //const isLoggedIn = useSelector(state => state.auth.isAuthenticated)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useHistory();
    const dispatch = useDispatch();
   
    const enterEmailInputRef = useRef();
    const enterPasswordInputRef = useRef();
    const enterConfirmPasswordRef = useRef();

    const SwitchHandler = () => {
        setIsLogin((prevent) => !prevent);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = enterEmailInputRef.current.value;
        const enteredPassword = enterPasswordInputRef.current.value;
        //const enteredConfirmPassword = enterConfirmPasswordRef.current.value;
        //dispatch(authActions.login());
        setIsLoading(true)
        let url;
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnQEvtto0FeB4KjaMBCBo2hoaTGrFe5m4'

        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnQEvtto0FeB4KjaMBCBo2hoaTGrFe5m4'
        }
        
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                // passwordE: enteredConfirmPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setIsLoading(false);
            if(res.ok){
            
                navigate.push("/navigation/home");
              return res.json()
            }else{
                return res.json().then(data => {
                  let errorMessage = 'Authentication failed';
                //   if (data && data.error && data.error.message){
                //         errorMessage = data.error.message;
                //   } 
                    
                  throw new Error(errorMessage);
                }) 
            }
        }).then((data) => {
            //console.log(data);
            
            dispatch(authActions.login(data.idToken));

        }).catch((err) => {
            alert(err.message) ;
        })
    }

    return (
        <section className={classes.authform}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.form}>
                <label htmlFor='email'>Email Id</label>
                <input type='email' id='email' ref={enterEmailInputRef} required />
                </div>
                <div className={classes.form}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' ref={enterPasswordInputRef} required />
                </div>
               {!isLogin && <div className={classes.form}>
                <label htmlFor='confirmpassword'>Comfirm Password</label>
                <input type='password' id='confirmpassword' ref={enterConfirmPasswordRef} required />
                </div>}
                <div className={classes.action}>
                    <Link to='/login/forgetpassword'>Forget Password ?</Link><br></br>
                {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }<br></br>
                {isLoading && <p>Sending request...</p>}
                    <button
                    type='button'
                    onClick={SwitchHandler}
                    >{isLogin ? 'Create new account' : 'Login with existing account'}</button>
                </div>
            </form>
        </section>
    )
};

export default AuthForm;