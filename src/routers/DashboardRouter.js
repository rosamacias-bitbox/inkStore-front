import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

export const DashboardRouter = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />                
                <Route path="/" component={Dashboard} />                
            </Switch>

        </div>
    )
}
export default DashboardRouter;
