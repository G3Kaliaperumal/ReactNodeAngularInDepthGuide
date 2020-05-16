import React from 'react';
import './CounterApp.css';

function CounterApp() {

  const increment = () => {
    alert('Increment');
  }

  const decrement = () => {
    alert('Decrement');
  }

  return (
    <div className='counter-app'>
      <h1 className='value'>0</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;
