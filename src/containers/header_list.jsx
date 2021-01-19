import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/header';
import { getAllHeaders } from '../selectors'

const HeaderList = props => {

  const headers = props.headers.map((header, i) => <Header header={header} key={i} />);

  return (
    <div>
      <ul className="headers">
        {headers}
      </ul>
    </div>
  );
}

function mapDispatchToProps(state) {
  return {
    headers: getAllHeaders(state)
  };
}

export default connect(mapDispatchToProps)(HeaderList);
