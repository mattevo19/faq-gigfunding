import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectHeader from '../actions/index';

const Header = (props) => {
  const handleClick = () => {
    props.selectHeader(props.header)
  }
  return (
    <li className="header" onClick={handleClick}>{props.header.title}</li>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHeader }, dispatch);
}

export default connect(null,mapDispatchToProps)(Header)
