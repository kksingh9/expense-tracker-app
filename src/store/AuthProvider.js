
import { useState } from "react"
import AuthContext from "./AuthContext"

const AuthProvider = (props) => {
    const [token, setToken] = useState("")

    const userLoggedIn = !!token ;
    const loginHandler = (token) => {
            setToken(token);
    }
    const logoutHandler = () => {

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