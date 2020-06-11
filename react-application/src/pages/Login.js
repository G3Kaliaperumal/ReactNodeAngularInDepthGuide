import React from 'react';

import { connect } from 'react-redux';

class Login extends React.Component {
  render = () => {
    const { data1 } = this.props;
    return <p>{JSON.stringify(data1)}</p>;
  }
}

const mapStateToProps = (state) => {
  return {
    data1: state.data1
  }
}

export default connect(mapStateToProps)(Login);
