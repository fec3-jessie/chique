import React from 'react';
// import Overview from './components/Overview.jsx';
import QandA from './components/QandA.jsx';
import Ratings from './components/Ratings.jsx';
import Related from './components/Related.jsx';
import axios from 'axios';
import { token, url } from '../../config.js';

const headers = {
  'Authorization': token
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_Id: 40344,
      reviewsData: {},
      productData: {},
      stylesData: {},
      metaData: {},
      questionsData: [],
      relatedItems: []
    }
  }

  componentDidMount() {
    // Axios Get Calls
    // ----------OVERVIEW ----------
    this.axiosGet(`/reviews/?product_id=${this.state.product_Id}`)
      .then(returnedData => {
        this.setState({
          reviewsData: returnedData.data
        })
      })
      .catch(err => console.error('Error getting reviewsData: ', err))

    this.axiosGet(`/products/${this.state.product_Id}`)
      .then(returnedData => {
        this.setState({
          productData: returnedData.data
        })
      })
      .catch(err => console.error('Error getting productData: ', err))

    this.axiosGet(`/products/${this.state.product_Id}/styles`)
      .then(returnedData => {
        this.setState({
          stylesData: returnedData.data
        })
      })
      .catch(err => console.error('Error getting stylesData: ', err))

    // ----------- RATINGS ----------
    this.axiosGet(`/reviews/meta?product_id=${this.state.product_Id}`)
      .then(returnedData => {
        this.setState({
          metaData: returnedData.data
        })
      })
      .catch(err => console.error('Error getting metaData: ', err))

    // ----------- QUESTIONS & ANSWERS ----------
    this.axiosGet(`/qa/questions?product_id=${this.state.product_Id}`)
      .then(returnedData => {
        this.setState({
          questionsData: returnedData.data.results
        })
      })
      .catch(err => console.error('Error getting questionsData: ', err))

    // ---------- RELATED ITEMS ----------
    this.axiosGet(`/products/${this.state.product_Id}/related`)
      .then(returnedData => {
        this.setState({
          relatedItems: returnedData.data
        })
      })
      .catch(err => console.error('Error getting relatedItems: ', err))
  }

  axiosGet(endpoint) {
    return axios.get(url + endpoint, { headers })
  }

  render () {
    return (
      <div>
        <h1>Overview</h1>
        {/* <Overview
          product_Id={this.state.product_Id}
          reviewsData={this.state.reviewsData}
          productData={this.state.productData}
          stylesData={this.state.stylesData}
        /> */}
        <h1>Ratings</h1>
        {/* <Ratings
          product_Id={this.state.product_Id}
          metaData={this.state.metaData}
        /> */}
        <h1>QandA</h1>
        <QandA
          product_Id={this.state.product_Id}
          questions={this.state.questionsData}
        />
        <h1>Related</h1>
        <Related
          product_Id={this.state.product_Id}
          relatedItems={this.state.relatedItems}
        />
      </div>
    )
  }
}

export default App;
