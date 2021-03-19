
import NavBar from '../components/layout/NavBar';
import { BrowserRouter,  Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import DashboardRouter from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';

export const AppRouter = () => {
   
   

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <PublicRoute exact path="/login" isAuthenticated={false}  component={LoginScreen}/>                    
                    <PrivateRoute path="/" isAuthenticated={false} component={DashboardRouter}/>                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;