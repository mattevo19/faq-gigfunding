import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Faq = (props) => {
  const handleClick = () => {
    props.selectFaq(props.faq.open)
  };

  return (
    <li 
      className={"question-list " + (props.faq.open ? 'open' : '')}
      onClick={handleClick}
      >
      <div className="faq-question">
        {props.faq.question}
      </div>
      <div className="faq-answer">
        {props.faq.answer}
      </div>
    </li>
  );
};

export default Faq;
