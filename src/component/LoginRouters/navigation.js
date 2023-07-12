import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../../pages/HomePage";
import Profile from "../profile/Profile";
import VerifyEmailId from "../VerifyEmailId/VerifyEmailId";
import AboutUsPage from "../../pages/AboutUsPage";
import ProductPage from "../../pages/ProductPage";
import { useSelector } from "react-redux";

import MainNavigation from "../Layouts/MainNavigation";
const Navigation = () => {
    const mode = useSelector((state) => state.mode.mode);
  return (
    <>
      <div style={{ background: mode ? "black" : "white" }}>
        

        <Switch>
          <Route path="/navigation/verify" exact>
            <VerifyEmailId />
          </Route>
          <Route path="/navigation/home"exact>
            <MainNavigation />
            <HomePage />
          </Route>
          <Route path="/navigation/home/profilepage">
          <MainNavigation />
            <Profile />
          </Route>
          <Route path="/navigation/product" exact>
          <MainNavigation />
            <ProductPage />
          </Route>

          <Route path="/navigation/aboutus" exact>
          <MainNavigation />
            <AboutUsPage />
          </Route>
          <Route path="/">
            <Redirect to="/navigation/verify" />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Navigation;
