import React, { Component } from 'react';
import FaqData from '../data/faq.json';

class FaqList extends Component {
  render() {
    return (
      <div className="faq-list">
        <ul>
          {FaqData.map((section) => {
            return <li>{section.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default FaqList;

