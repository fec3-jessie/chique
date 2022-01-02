import React from 'react';
import Overview from './components/Overview.jsx';
import Ratings from './components/Ratings.jsx';
import Related from './components/Related.jsx';
import QandA from './components/QandA.jsx';
import axios from 'axios';
import { token, url } from '/config.js';

const headers = {
  'Authorization': token
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_Id: 40358,
      product_name: null
    };
  }

  render () {
    return (
      <div>
        <h1>Overview</h1>
        <Overview
          product_Id={this.state.product_Id}
        />
        <h1>Related</h1>
        <Related
          product_Id={this.state.product_Id}
        />
        <h1>QandA</h1>
        <QandA
          product_Id={this.state.product_Id}
        />
        <h1>Ratings</h1>
        <Ratings
          product_Id={this.state.product_Id}
        />
        <h1>Related</h1>
        <Related
          product_Id={this.state.product_Id}
        />


      </div>
    );
  }


}

export default App;
