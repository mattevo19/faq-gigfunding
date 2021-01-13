import React from 'react';
import { connect } from 'react-redux';

export const activeHeader = (props) => {
  if (!props.activeHeader) {
    return (
      <div className="active-header">
        <h3>Select a header...</h3>
      </div>
    );
  }

  return (
    <div className="active-header">
      <h3>{props.activeHeader.address}</h3>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeHeader: state.activeHeader
  };
}

export default connect(mapStateToProps)(activeHeader);