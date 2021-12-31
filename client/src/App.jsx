import React from 'react';
// import Overview from './components/Overview.jsx';
// import QandA from './components/QandA.jsx';
import Ratings from './components/Ratings.jsx';
// import Related from './components/Related.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_Id: 40358
    };
  }

  render () {
    return (
      <div>


        <h1>Overview</h1>
        {/* <Overview /> */}
        <h1>QandA</h1>
        {/* <QandA /> */}
        <h1>Ratings</h1>
        <Ratings product_Id={this.state.product_Id}/>
        <h1>Related</h1>
        {/* <Related /> */}
      </div>
    );
  }
}

export default App;
