import React from 'react';
import Overview from './components/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Overview />
        {/* <QandA /> */}
        {/* <Ratings /> */}
        {/* <Related /> */}
      </div>
    )
  }
}

export default App;