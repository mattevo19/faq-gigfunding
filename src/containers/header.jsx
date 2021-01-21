import React from 'react';
import { connect } from 'react-redux';
import selectHeader from '../actions/index';

const Header = (props) => {
  const handleClick = () => {
    props.selectHeader(props.header);
  };

  const index = props.index;

  return (
    <li>
      <div
        onClick={handleClick}
        role="presentation"
      >
        <span className={`half-highlight-element${index} offering`}>
          {props.header}
        </span>
      </div>
    </li>
  );
};

export default connect(null, { selectHeader })(Header);
