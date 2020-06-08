import React from 'react';

import connect from '../store/connect';

class Login extends React.Component {
  render = () => <p>{JSON.stringify(this.props.rentals())}</p>
}

export default connect(Login);
