import React from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';

import { useState, useCallback } from 'react';
import CounterView from './CounterView';

// Functional Component
const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const [whatever, setWhatever] = useState(10);
  const { title } = props;

  // useCallback() => returns a memoized callback; Reference: https://reactjs.org/docs/hooks-reference.html#usecallback
  const modifyValue = useCallback((step) => () => setCount(count + step), [count]);
  const doWhatever = useCallback(() => setWhatever(whatever + 1), [whatever]);

  return (
    <div className='counter-app'>
        <h2>{title}</h2>
        <CounterView
          countValue = {count}
          handlerModifyValue = {modifyValue}
        />
        <h2>{whatever}</h2>
        <button onClick={doWhatever}>Do Whatever</button>
      </div>
  );
}

/*// Class Component
class CounterApp extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  modifyValue = (step) => () => {
    this.setState({
      count: this.state.count + step
    });
  }

  // Lifecycle function
  render() {
    const { count } = this.state;
    const { title } = this.props;
    return (
      <div className='counter-app'>
        <h2>{title}</h2>
        <h1 className='value'>{count}</h1>
        <button onClick={this.modifyValue(1)}>Increment</button>
        <button onClick={this.modifyValue(-1)}>Decrement</button>
      </div>
    );
  }
}*/

// Required for both Fnctl and class cmpt
CounterApp.propTypes = {
  title: PropTypes.string.isRequired
}

export default CounterApp;
