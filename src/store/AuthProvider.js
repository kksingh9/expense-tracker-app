
import { useState } from "react"
import AuthContext from "./AuthContext"

const AuthProvider = (props) => {

    const idToken = localStorage.getItem('token');
    const [token, setToken] = useState(idToken);
    const [expenseState, setExpenseState] = useState("")

    const userLoggedIn = !!token ;
    const loginHandler = (token) => {
            setToken(token);
            localStorage.setItem('token',token);
    }
    const logoutHandler = () => {
            setToken(null);
            localStorage.removeItem('token');
    }
    const addExpensesHandler = (expense) => {
        //const expenseArray = [...expenseState, expense];
            setExpenseState(expense);
    }
    console.log();
    const authContext = {
        token: token,
        isLoggedIn: userLoggedIn,
        login:  loginHandler,
        logout: logoutHandler,
        expenses: expenseState,
        addExpenses: addExpensesHandler,
    }
    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;