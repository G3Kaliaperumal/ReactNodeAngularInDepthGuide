import React from 'react';

import connect from '../store/connect';

class Register extends React.Component {
  render = () => <p>{JSON.stringify(this.props.data2())}</p>
}

const mapStateToProps = (state) => {
  return {
    data2: state.data2
  }
}

export default connect(mapStateToProps)(Register);
