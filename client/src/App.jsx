import React from 'react';
import QandA from './components/QandA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {/* <Overview /> */}
        <QandA />
        {/* <Ratings /> */}
        {/* <Related /> */}
      </div>
    )
  }
}

export default App;