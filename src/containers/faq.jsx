import React from 'react';
import { connect } from 'react-redux';
import toggleFaq from '../actions/toggle_faq';

const Faq = (props) => {
  const handleClick = () => {
    props.toggleFaq(props.faq);
  };

  const openClass = props.faq.open ? 'open' : ''

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li className={`question-list ${openClass}`} onClick={handleClick}>
      <div className="faq-question">
        {props.faq.question}
      </div>
      <div className="faq-answer">
        {props.faq.answer}
      </div>
    </li>
  );
};

export default connect(null, { toggleFaq })(Faq);
