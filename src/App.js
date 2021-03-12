import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import MainNavigation from './Navigation/MainNavigation';

import Users from './user/pages/Users'
import Bars from './bar/pages/Bars'


import NewNight from './nights/pages/NewNight'
import UserNights from './nights/pages/UserNights';
import UpdateNight from './nights/pages/UpdateNight'



const App= () => {

  return (
    <Router>

      <MainNavigation/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Users/>
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
 )
}

export default App;
