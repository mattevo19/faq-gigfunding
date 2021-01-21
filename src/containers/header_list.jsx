/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { getAllHeaders } from '../selectors';

const HeaderList = (props) => {
  const headers = props.headers.map((header, i) => <Header header={header} key={i} index={i} />);

  return (
    <div>
      <ul className="headers">
        {headers}
      </ul>
    </div>
  );
};

function mapDispatchToProps(state) {
  return {
    headers: getAllHeaders(state)
  };
}

export default connect(mapDispatchToProps)(HeaderList);
