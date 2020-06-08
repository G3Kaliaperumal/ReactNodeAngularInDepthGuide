import React from 'react';

import connect from '../store/connect';

class Login extends React.Component {
  render = () => <p>{JSON.stringify(this.props.data1())}</p>
}

const mapStateToProps = (state) => {
  return {
    data1: state.data1
  }
}

export default connect(mapStateToProps)(Login);
