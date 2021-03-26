
import NavBar from '../components/ui/NavBar';
import { BrowserRouter,  Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import DashboardRouter from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';

export const AppRouter = () => {
   
    //<Route path="/login"  component={LoginScreen}/>                    
    //<Route path="/" component={DashboardRouter}/>   
    const { logged } = useSelector ( state => state.auth );
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    
                    <PublicRoute exact path="/login" isAuthenticated={logged}  component={LoginScreen}/>                    
                    <PrivateRoute path="/" isAuthenticated={logged} component={DashboardRouter}/>                  
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;