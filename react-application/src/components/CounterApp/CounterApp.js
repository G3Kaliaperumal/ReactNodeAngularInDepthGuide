import React from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';

import { useState } from 'react';
import CounterView from './CounterView';

// Functional Component
const CounterApp = (props) => {
  const [count, setCount] = useState(0);
  const { title } = props;

  const modifyValue = (step) => () => setCount(count + step);

  return (
    <div className='counter-app'>
        <h2>{title}</h2>
        <CounterView
          countValue = {count}
          handlerModifyValue = {modifyValue}
        />
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
