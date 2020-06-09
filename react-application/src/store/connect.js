import React from 'react';

import { StateContext } from './Provider';

const connect = selectState => Component => {
  class ConnectClass extends React.Component {
    render() {
      const {getState, dispatch } = this.context;
      const slice = selectState(getState());
      return <Component {...slice} dispatch={dispatch}></Component>;
    }
  }
  
  ConnectClass.contextType = StateContext;
  return ConnectClass;
}

export default connect;
