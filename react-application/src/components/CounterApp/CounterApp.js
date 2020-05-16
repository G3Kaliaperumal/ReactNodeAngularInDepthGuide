import React from 'react';
import './CounterApp.css';

// Class Component
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
    return (
      <div className='counter-app'>
        <h1 className='value'>{count}</h1>
        <button onClick={this.modifyValue(1)}>Increment</button>
        <button onClick={this.modifyValue(-1)}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;
