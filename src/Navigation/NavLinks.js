import React from 'react';
import {NavLink} from 'react-router-dom'
import './NavLinks.css'

const NavLinks = props => {
    return (<ul className="nav-links">
        <li>
            <NavLink to="/Bars" exact>Tous les Bars</NavLink>            
        </li>
        <li>
            <NavLink to="/u1/Nights"> Mes Soirée</NavLink>            
        </li>
        <li>
            <NavLink to="/MyNight/New">Créer une soirée</NavLink>            
        </li>
        <li>
            <NavLink to="/auth"> Connexion </NavLink>            
        </li>
        
    </ul>)
}

export default NavLinks