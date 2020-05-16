import React, { useState } from 'react';
import './CounterApp.css';

function CounterApp() {
  /**
   * useState(0) => return two values
   * 1. Value given in the argument. In this case value '0'.
   * 2. Function that helps mutate the value
   */
  const [count, setCount] = useState(0);

  const modifyValue = (step) => () => setCount(count + step);
  
  return (
    <div className='counter-app'>
      <h1 className='value'>{count}</h1>
      <button onClick={modifyValue(1)}>Increment</button>
      <button onClick={modifyValue(-1)}>Decrement</button>
    </div>
  );
}

export default CounterApp;
