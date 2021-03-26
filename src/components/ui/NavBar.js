import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {

    const dispatch = useDispatch();
    const { logged, name } = useSelector ( state => state.auth );

    const handleLogout = () => {
        if (logged)
            dispatch( logout() );    
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to="/" className="navbar-brand" > [ STORE ]</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                
                {logged ? 
                    <div className="navbar-nav mr-auto navbar-left">
                     <NavLink activeClassName="active" to="/dashboard" className="nav-item nav-link"> Warehouse </NavLink>
                        <NavLink activeClassName="active" to="/suppliers" className="nav-item nav-link"> Suppliers </NavLink>
                    </div>
                :null}
                

                <div className="navbar-nav navbar-right">
                    <span className="nav-item nav-link text-info"> {name}</span>
                        {logged ? 
                            <Button activeClassName="active" className="nav-item nav-link btn" onClick={handleLogout}> Logout</Button>
                        : null}
                    
                </div>
            </div>
        </nav>)

}


export default NavBar;