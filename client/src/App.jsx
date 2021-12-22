import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Overview />
        <QandA />
        <Ratings />
        <Related />
      </div>
    )
  }
}

export default App;