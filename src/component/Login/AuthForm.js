
import React, { useState, useRef } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
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
            console.log(data);
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