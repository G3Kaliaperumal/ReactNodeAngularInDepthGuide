import React from 'react';

import { StateContext } from './Provider';

const connect = selectState => Component => {
  class ConnectClass extends React.Component {
    render() {
      const state = this.context.getState();
      const slice = selectState(state);
      return <Component {...slice}></Component>;
    }
  }
  
  ConnectClass.contextType = StateContext;
  return ConnectClass;
}

export default connect;
