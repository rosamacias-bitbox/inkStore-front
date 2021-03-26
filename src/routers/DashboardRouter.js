import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import SuppliersScreen from '../components/suppliers/SuppliersScreen';

export const DashboardRouter = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />    
                <Route exact path="/suppliers" component={SuppliersScreen} />            
                <Route path="/" component={Dashboard} />                
            </Switch>

        </div>
    )
}
export default DashboardRouter;
