import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Backdrop from '../UIElements/Backdrop'

import MainHeader from './MainHeader'
import './MainNavigation.css'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerOpen] = useState(false)

    const openDrawer = () => {
        setDrawerOpen(true);
    }

    const closeDrawer = () => {
        setDrawerOpen(false)
    }

        return (
            <>
            {drawerIsOpen && <Backdrop onClick={closeDrawer} /> }            
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
    
                <h1 className="main-navigation__title">
                    <Link to="/"> Bar Québec </Link>
                </h1>
                
                <nav>
                  <NavLinks/>
                </nav>
    
            </MainHeader>
            </>
    )
}

export default MainNavigation