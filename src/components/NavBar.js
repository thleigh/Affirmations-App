import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import NewAffirmation from './NewAffirmation';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/#Welcome" >Affirmations
                        <img src={logo} alt="ribbon" className="affirmationLogo"/>
                </Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav ml-auto">
                        <NewAffirmation />
                        {
                            props.isAuth 
                            ?
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" onClick={props.handleLogout} className="nav-link text-info">Logout</NavLink>
                                </li>
                            </>
                            : 
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info"  to="/signup">Create Account</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-info"  to="/login">Login</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;