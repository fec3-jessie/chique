import React from 'react';
import Ratings from './components/Ratings.jsx';

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
        {/* <Overview /> */}
        {/* <QandA /> */}
        <Ratings product_Id={this.state.product_Id}/>
        {/* <Related /> */}
      </div>
    );
  }
}

export default App;
