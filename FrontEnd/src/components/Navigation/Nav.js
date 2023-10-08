import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { path } from '../../ultils/path';

const Nav = () => {
    return (
        <div class="topnav">
            <NavLink class="active" to={path.home}>
                Home
            </NavLink>
            <NavLink to={path.dashboard}>Dashboard</NavLink>
            <NavLink to={path.contact}>Contact</NavLink>
            <NavLink to={path.about}>About</NavLink>
        </div>
    );
};

export default Nav;
