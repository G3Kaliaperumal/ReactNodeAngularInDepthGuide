import React, { useEffect } from 'react';

const CounterView = (props) => {
  const { countValue, handlerModifyValue } = props;

  // Second parameter indicates the dependency array
  useEffect(() => {
    console.log('useEffect() - CounterView');
  }, []);

  return (
    <div>
      <h1 className='value'>{countValue}</h1>
      <button onClick={handlerModifyValue(1)}>Increment</button>
      <button onClick={handlerModifyValue(-1)}>Decrement</button>
    </div>
  );
}

export default CounterView;
