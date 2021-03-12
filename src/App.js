import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './user/pages/Users'
import NewNight from './nights/pages/NewNight'
import MainNavigation from './Navigation/MainNavigation';
import UserNights from './nights/pages/UserNights';
import Bars from './bar/pages/Bars'

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

        <Redirect to="/"/>
      </Switch>
      </main>
    </Router>
 )
}

export default App;
