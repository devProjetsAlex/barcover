import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom'
import './NavLinks.css'
import {ConnexionContext} from '../util/auth-context'

const NavLinks = props => {
    const ConnexionPublic = useContext(ConnexionContext)

    return (<ul className="nav-links">
        <li>
            <NavLink to="/Bars" exact>Tous les Bars</NavLink>            
        </li>
        {ConnexionPublic.isLoggedIn && (
        <li>
            <NavLink to="/u1/Nights"> Mes Soirée</NavLink>            
        </li>        
        )}
          {ConnexionPublic.isLoggedIn && (
        <li>
            <NavLink to="/MyNight/New">Créer une soirée</NavLink>            
        </li>
         )}
         {!ConnexionPublic.isLoggedIn && (
        <li>
            <NavLink to="/AccueilConnexion"> Connexion </NavLink>            
        </li>
          )}
             {ConnexionPublic.isLoggedIn && (
        <li>
            <NavLink to="/AccueilConnexion"> Déconnexion </NavLink>            
        </li>
          )}
        
    </ul>)
}

export default NavLinks