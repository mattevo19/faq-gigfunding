import React from 'react';
import { connect } from 'react-redux';
import selectHeader from '../actions/index';

const Header = (props) => {
  const handleClick = () => {
    props.selectHeader(props.header);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li onClick={handleClick}>{props.header}</li>
  );
};

export default connect(null, { selectHeader })(Header);
