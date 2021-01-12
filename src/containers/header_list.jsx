import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/header';

class HeaderList extends Component {
  renderList() {
    return this.props.headers.map(header => <Header title={header.title} position={header.position} key={header.id} />)
  }
  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}
function mapDispatchToProps(state) {
  return {
    headers: state.headers
  }
}

export default connect(mapDispatchToProps)(HeaderList)