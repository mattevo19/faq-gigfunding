import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Faq = ({ faq }) => {
  return (
    <li className={"question-list " + (faq.open ? 'open' : '')}>
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </li>
  );
};

export default Faq;
