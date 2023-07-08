import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Layouts from './component/Layouts/Layouts';
import AuthForm from './component/Login/AuthForm';
import { useContext } from 'react';
import AuthContext from './store/AuthContext';
import Navigation from './component/navigation/navigation';
import ForgetPassword from './component/ForgetPassword/ForgetPassword';

function App() {

  const ctx = useContext(AuthContext);
  const isLoggedIn = ctx.isLoggedIn;
  return (
    <div>
     

       
      <Layouts>
        <Switch>
      
        {isLoggedIn &&
        
        <Navigation/> 
  
        }
        
        
       {!isLoggedIn && <Route path="/login" exact>
            <AuthForm />
        </Route> }
        {!isLoggedIn && <Route path='/login/forgetpassword'>
          <ForgetPassword />
        </Route>
        }
      { !isLoggedIn && <Route path='*'>
            <Redirect to='/login' />
        </Route>}
       { !isLoggedIn && <Route path='*'>
            <Redirect to='/' />
        </Route>}
        </Switch>
      </Layouts>

    </div>
  );
}

export default App;
