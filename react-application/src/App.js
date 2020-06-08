import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/shared/Header';
import Routes from './Routes';
import { StateContext } from './state-context';
import store from './store/rentals';


// Functional Component
function App() {
  return (
    <StateContext.Provider value={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </StateContext.Provider>
  );
}

export default App;
