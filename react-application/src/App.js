import React from 'react';
import Header from './components/shared/Header';
import { Router, Route } from './components/Router';

import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';

// Functional Component
function App() {
  return (
    <Router>
      <Header />
      <Route path="/">
        <RentalHome />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Router>
  );
}

export default App;
