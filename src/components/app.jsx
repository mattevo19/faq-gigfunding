import React from 'react';
import HeaderList from '../containers/header_list';
import ActiveHeader from '../containers/active_header';


const App = () => {
  return (
    <div className="app">
      <h1>got a question?</h1>
      <HeaderList />
      <ActiveHeader />
      <div>
        <h3>What if my quesiton wasn't answered here?</h3>
        <p>We're alwys happy to answer queries and requests. Email <strong>team@gigfunding.org</strong> and we will get back to you, and if it's a particularly brilliant question we'll add it to this very page.</p>
      </div>
    </div>
  );
};

export default App;
