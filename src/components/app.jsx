import React from 'react';
import Header from '../components/header';
import HeaderList from '../containers/header_list';
import ActiveFaq from '../containers/active_faq';
import Bottom from '../components/footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeaderList />
      <ActiveFaq />
      <Bottom />
    </div>
  );
};

export default App;
