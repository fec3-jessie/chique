import React from 'react';
import Ratings from './/components/Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {/* <Overview />
        <QandA /> */}
        <Ratings />
        {/* <Related /> */}
      </div>
    )
  }
}

export default App;