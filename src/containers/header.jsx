import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectHeader from '../actions/index';

const Header = (props) => {
  const handleClick = () => {
    props.selectHeader(props.header)
  }
  return (
    <div>
      <h2 className={`header ${props.position}`} onClick={handleClick}>{props.title}</h2>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectHeader }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header)
