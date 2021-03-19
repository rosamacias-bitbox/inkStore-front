import React, { useContext } from 'react'
import { NavLink, Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import Button from '@material-ui/core/Button';
import { types } from '../../types/types';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {

    const { user:{name}, dispatch } = useContext( AuthContext );    
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');
       dispatch({
           type : types.logout,             
       })
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to="/" className="navbar-brand" > [ ink ] STORE</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto navbar-left">
                    <NavLink activeClassName="active" to="/dashboard" className="nav-item nav-link"> Warehouse </NavLink>
                </div>

                <div className="navbar-nav navbar-right">
                    <span className="nav-item nav-link text-info"> {name}</span>
                    <Button activeClassName="active"  className="nav-item nav-link btn" onClick={handleLogout}> Logout</Button>
                </div>
            </div>
        </nav>)

}

export default NavBar;