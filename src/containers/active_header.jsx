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
      <ul>
        <li>
          {props.activeHeader.questions.map((question, index) => {
            return (
              <li key={index}>{question}</li>)
          })}
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeHeader: state.activeHeader
  };
}

export default connect(mapStateToProps)(activeHeader);