import React from 'react';
import HeaderList from '../containers/header_list';
import FaqList from '../containers/faq_list';

const App = () => {
  return (
    <div className="app">
      <h1>got a question?</h1>
      <HeaderList />
      <FaqList />
    </div>
  );
};

export default App;
