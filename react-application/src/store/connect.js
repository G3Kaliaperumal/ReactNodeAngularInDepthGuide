import React from 'react';

import { StateContext } from '../state-context';

const connect = (Component) => {
    class ConnectClass extends React.Component {
        render() {
            return <Component {...this.context}></Component>;
        }
    }

    ConnectClass.contextType = StateContext;
    return ConnectClass;
}

export default connect;
