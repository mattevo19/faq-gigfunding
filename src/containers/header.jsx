import React from 'react';
import { connect } from 'react-redux';
import selectHeader from '../actions/index';

const Header = (props) => {
  const handleClick = () => {
    props.selectHeader(props.header);
  };
  return (
    <li>
      <div onClick={handleClick} role="presentation">
        {props.header}
      </div>
    </li>
  );
};

export default connect(null, { selectHeader })(Header);
