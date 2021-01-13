import React from 'react';
import HeaderList from '../containers/header_list';
import ActiveHeader from '../containers/active_header';
import FaqList from '../containers/faq_list';

const App = () => {
  return (
    <div className="app">
      <h1>got a question?</h1>
      <HeaderList />
      <ActiveHeader />
      {/* <FaqList /> */}
    </div>
  );
};

export default App;
