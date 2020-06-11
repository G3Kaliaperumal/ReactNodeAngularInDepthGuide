import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/shared/Header';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { initStore } from './store/rentals';

const store = initStore();
// Functional Component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
