
import NavBar from '../components/ui/NavBar';
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import DashboardRouter from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';

export const AppRouter = () => {
   
   
                    //<PublicRoute exact path="/login" isAuthenticated={false}  component={LoginScreen}/>                    
                    //<PrivateRoute path="/" isAuthenticated={false} component={DashboardRouter}/>  
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/login"  component={LoginScreen}/>                    
                    <Route path="/" component={DashboardRouter}/>                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;