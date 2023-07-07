import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Layouts from './component/Layouts/Layouts';
import AuthForm from './component/Login/AuthForm';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import Profile from './component/profile/Profile';
import Navigation from './component/navigation/navigation';
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const ctx = useContext(AuthContext);
  const isLoggedIn = ctx.isLoggedIn;
  return (
    <div>
    {isLoggedIn  && <Navigation/> }
      {!isLoggedIn && 
      <Layouts>
        <Switch>
         
       
        <Route path="/product">
            <ProductPage />
        </Route>
        <Route path="/aboutus">
            <AboutUsPage />
        </Route>
        <Route path="/login">
            <AuthForm />
        </Route>
        {/* <Route path='*'>
            <Redirect to='/' />
        </Route> */}
        </Switch>
      </Layouts>
}
    </div>
  );
}

export default App;
