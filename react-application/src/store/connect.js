import React from 'react';

import { StateContext } from './Provider';

const connect = selectState => Component => {
  class ConnectClass extends React.Component {
    
    constructor(props, context) {
      super(props);
      this.state = {
        slice: selectState(context.getState())
      }

      this.unsubscribe = context.subscribe(() => this.handleStateChange(context));
    }

    handleStateChange = (context) => {
      const rootState = context.getState();
      this.setState({slice: selectState(rootState)});
    }

    render() {
      const { dispatch } = this.context;
      const { slice } = this.state;
      return <Component {...slice} dispatch={dispatch}></Component>;
    }
  }
  
  ConnectClass.contextType = StateContext;
  return ConnectClass;
}

export default connect;
