import React from 'react'
import { Route,  Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
  
    return (
        <Route {...rest}
            component={ (props) => (
                ( isAuthenticated )
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}
        
PrivateRoute.prototype = {
    isAuthenticated : PropTypes.boolean,
    component : PropTypes.func.isRequired
} 

