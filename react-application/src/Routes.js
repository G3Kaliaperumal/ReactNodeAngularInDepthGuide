import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RentalHome from './pages/RentalHome';
import RentalDetail from './pages/RentalDetail';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () =>
  <div className="container all-container">
    <Switch>
      <Route exact path="/">
        <RentalHome />
      </Route>
      <Route path="/rental/:id">
        <RentalDetail id="id" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  </div>

export default Routes;
