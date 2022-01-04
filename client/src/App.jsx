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
      product_Id: 40344,
      product_name: 'Camo Onesie'
    };
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.relatedClickHandler = this.relatedClickHandler.bind(this);
  }


  handleProductNameChange (name) {
    this.setState({product_name: name});
  }

  relatedClickHandler (e, itemId, cb) {
    e.preventDefault();
    console.log(itemId);
    this.setState({product_Id: itemId});
    cb(itemId);
  }

  render () {
    return (
      <div>
        <h1>Overview</h1>
        <Overview
          product_Id={this.state.product_Id}
          handleProductNameChange={this.handleProductNameChange}
        />
        <h1>Related</h1>
        <Related
          product_Id={this.state.product_Id}
          relatedClickHandler={this.relatedClickHandler}
        />
        <h1>QandA</h1>
        <QandA
          product_id={this.state.product_Id}
          product_name={this.state.product_name}
        />
        <h1>Ratings</h1>
        <Ratings
          product_Id={this.state.product_Id}
          productName={this.state.product_name}
        />
      </div>
    );
  }


}

export default App;
