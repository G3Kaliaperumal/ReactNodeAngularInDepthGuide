import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/shared/Header';
import Routes from './Routes';


// Functional Component
function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
