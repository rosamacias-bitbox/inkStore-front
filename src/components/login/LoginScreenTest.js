import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import '../../css/login.css';

export const LoginScreenTest = ({ history }) => {


    const { dispatch } = useContext(AuthContext);
    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'rosa'
            }
        })
        history.replace('/');
    };


    return (

        <div class="login-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2 class="text-center">Log in</h2>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Username" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required"/>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block" onClick={handleLogin}>Log in</button>
                </div>                       
            </form>
           
        </div>
    )
}

export default LoginScreenTest;