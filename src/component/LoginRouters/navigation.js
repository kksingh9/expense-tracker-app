import { Switch, Route, Redirect} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../../pages/HomePage";
import Profile from "../profile/Profile";
import VerifyEmailId from "../VerifyEmailId/VerifyEmailId";
import AboutUsPage from "../../pages/AboutUsPage";
import ProductPage from "../../pages/ProductPage";

const Navigation = () => {
    
    return (
        <>
        <Switch>
        <Route path="/navigation/home" exact >
             <HomePage />
             <VerifyEmailId />
        </Route>
        <Route path="/navigation/home/profilepage" >
            <Profile />
        </Route>
        <Route path="/navigation/product" >
            <ProductPage />
        </Route>
        
        <Route path="/navigation/aboutus">
            <AboutUsPage />
        </Route>
        <Route path="/">
            <Redirect to="/navigation/home" />
        </Route>
        </Switch>
         
        </>
    );
};

export default Navigation;