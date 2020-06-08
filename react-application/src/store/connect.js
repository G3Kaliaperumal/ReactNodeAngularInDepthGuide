import React from 'react';

import { StateContext } from '../state-context';

const connect = sliceProperties => Component => {
  class ConnectClass extends React.Component {
    render() {
      const slicedValues = sliceProperties(this.context);
      return <Component {...slicedValues}></Component>;
    }
  }
  
  ConnectClass.contextType = StateContext;
  return ConnectClass;
}


export default connect;
