import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import RentalHome from './pages/RentalHome';

// Functional Component
function App() {
  return (
    <div>
        <Header />
        <RentalHome />
    </div>
  );
}

export default App;
