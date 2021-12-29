import React from 'react';
// import Overview from './components/Overview.jsx'
// import QandA from './components/QandA.jsx'
import Related from './components/Related.jsx';
import Ratings from './components/Ratings.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {/* <h1>Overview</h1>
        <Overview />
        <h1>QandA</h1>
        <QandA /> */}
        <Related />
        <Ratings />
      </div>
    )
  }
}

export default App;
