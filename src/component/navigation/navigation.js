import { Switch, Route, Router} from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "../../pages/HomePage";
import Profile from "../profile/Profile";
import VerifyEmailId from "../VerifyEmailId/VerifyEmailId";

const Navigation = () => {
    return (
        <>
        <div>navigation</div>
        <Route path="/" >
             <HomePage />
             <VerifyEmailId />
          </Route>
         <Route path="/profilepage">
              <Profile />
          </Route>
        </>
    );
};

export default Navigation;