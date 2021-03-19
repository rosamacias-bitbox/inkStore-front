import React, {useContext} from 'react';
import NavBar from '../components/layout/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import DashboardRouter from './DashboardRouter';
import LoginScreenTest from '../components/login/LoginScreenTest';
import LoginScreen from '../components/login/LoginScreen';

export const AppRouter = () => {
    const { user } =  useContext(AuthContext);

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <PublicRoute exact path="/login" isAuthenticated={user.logged}  component={LoginScreen}/>                    
                    <PrivateRoute path="/" isAuthenticated={user.logged} component={DashboardRouter}/>                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;