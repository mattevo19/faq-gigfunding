import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleFaq from '../actions/toggle_faq';

const Faq = (props) => {
  const handleClick = () => {
    props.toggleFaq(props.faq);
  };
  return (
    <li className={`question-list ${props.faq.open ? 'open' : ''}`} onClick={handleClick}>
      <div className="faq-question">
        {props.faq.question}
      </div>
      <div className="faq-answer">
        {props.faq.answer}
      </div>
    </li>
  );
};

// function mapStateToProps(state) {
//   return {
//     toggleFaq: state.toggleFaq
//   };
// };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleFaq }, dispatch);
}

export default connect(null, mapDispatchToProps)(Faq);
