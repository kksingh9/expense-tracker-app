
import React, { useState, useRef } from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
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
        const enteredConfirmPassword = enterConfirmPasswordRef.current.value;
        if(isLogin){

        }else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnQEvtto0FeB4KjaMBCBo2hoaTGrFe5m4',{
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.ok){

                }else{
                    return res.json().then(data => {
                            console.log('successful');
                    }) 
                }
            })
        }
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
                    <button>{isLogin ? 'Login' : 'Create Account'}</button> <br></br>
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