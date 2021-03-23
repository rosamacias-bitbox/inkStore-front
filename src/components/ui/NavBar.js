import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {
    
    const handleLogout = () => {
    
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to="/" className="navbar-brand" > [ ink ] STORE</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mr-auto navbar-left">
                    <NavLink activeClassName="active" to="/dashboard" className="nav-item nav-link"> Warehouse </NavLink>
                </div>

                <div className="navbar-nav navbar-right">
                    <span className="nav-item nav-link text-info"> {/*name*/}</span>
                    <Button activeClassName="active"  className="nav-item nav-link btn" onClick={handleLogout}> Logout</Button>
                </div>
            </div>
        </nav>)

}

export default NavBar;