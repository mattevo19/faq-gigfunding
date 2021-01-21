/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import Faq from '../containers/faq';
import { getVisibleFaqs } from '../selectors';

export const activeFaq = (props) => {
  const visibleFaqs = props.faqs.map((faq, i) => <Faq faq={faq} key={i} index={i} />);

  return (
    <div className="active">
      <ul>
        {visibleFaqs.slice(0, 10)}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    faqs: getVisibleFaqs(state)
  };
}

export default connect(mapStateToProps)(activeFaq);
