
import { useState } from "react"
import AuthContext from "./AuthContext"

const AuthProvider = (props) => {

    const idToken = localStorage.getItem('token');
    const [token, setToken] = useState(idToken);

    const userLoggedIn = !!token ;
    const loginHandler = (token) => {
            setToken(token);
            localStorage.setItem('token',token);
    }
    const logoutHandler = () => {
            setToken(null);
    }

    const authContext = {
        token: token,
        isLoggedIn: userLoggedIn,
        login:  loginHandler,
        logout: logoutHandler,
    }
    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;