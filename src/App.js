import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import MainNavigation from './Navigation/MainNavigation';

import Users from './user/pages/Users'
import Bars from './bar/pages/Bars'


import NewNight from './nights/pages/NewNight'
import UserNights from './nights/pages/UserNights';
import UpdateNight from './nights/pages/UpdateNight'
import AccueilConnexion from './connexion/pages/AccueilConnexion'
import ConnexionPrive from './connexion/pages/ConnexionPrive'
import ConnexionPublic from './connexion/pages/ConnexionPublique'
import ConnexionAdmin from './connexion/pages/ConnexionAdmin'
import {ConnexionContext} from './util/auth-context'


const App= () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggin = useCallback(()=>{
    setIsLoggedIn(true)
  },[])

  const loggout = useCallback(()=>{
    setIsLoggedIn(false)
  },[])
  

  return (
    <ConnexionContext.Provider value={{isLoggedIn: isLoggedIn, login: loggin, logout: loggout}}>
    <Router>
      <MainNavigation/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>

        <Route path="/AccueilConnexion" exact>
          <AccueilConnexion/>
        </Route>
          
        <Route path="/ConnexionPublic">
          <ConnexionPublic/>  
        </Route>
        <Route path="/ConnexionBusiness">
          <ConnexionPrive/>
        </Route>
        
        <Route path="/ConnexionAdmin">
          <ConnexionAdmin/>  
        </Route>

        <Route path="/Bars">
            <Bars/>          
        </Route>

        <Route path="/:userId/Nights">
            <UserNights/>
        </Route>

        <Route path="/MyNight/New" exact>
          <NewNight/>
        </Route>

        <Route path="/MyNight/:nightId">
            <UpdateNight/>
        </Route>

        <Redirect to="/"/>
      </Switch>
      </main>
    </Router>
    </ConnexionContext.Provider>
 )
}

export default App;
