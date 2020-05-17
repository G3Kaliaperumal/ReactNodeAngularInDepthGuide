import React, { useEffect } from 'react';

const generateColor = () => {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

const CounterView = (props) => {
  const { countValue, handlerModifyValue } = props;

  // Second parameter indicates the dependency array
  useEffect(() => {
    console.log('useEffect() - CounterView');
  }, []);

  return (
    <div style={{background: generateColor()}}>
      <h1 className='value'>{countValue}</h1>
      <button onClick={handlerModifyValue(1)}>Increment</button>
      <button onClick={handlerModifyValue(-1)}>Decrement</button>
    </div>
  );
}

// React.memo => View is re-rendered only when the props are modified
export default React.memo(CounterView);
