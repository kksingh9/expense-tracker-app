import { createContext } from "react"

const AuthContext = createContext({
    token : "",
    isLoggedIn : false,
    login: (token) => {},
    logout: () => {},
    // expenses: [],
    // addExpenses: (expense) => {},
});

export default AuthContext ;