import React from 'react';
import Overview from './components/Overview.jsx';
import Ratings from './components/Ratings.jsx';
import Related from './components/Related.jsx';
import QandA from './components/QandA.jsx';
import axios from 'axios';

const findId = (node) => {
  let id;
  let moduleIds = {
    'Overview': true,
    'Related': true,
    'QandA': true,
    'Ratings': true,
  };
  //base case//
    // id can be found in moduleIds
      // set id to this id
      //return from recursion
    // else recursion
  // do some stuff to recurse the dom tree//
    // if parentNodes check ids if false continue
  return id;
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

  relatedClickHandler (e, itemId, itemName, cb) {
    e.preventDefault();
    this.setState({
      product_Id: itemId,
      product_name: itemName
    });
    cb(itemId);
  }



  render () {

    window.addEventListener('click', function (e) {
      let body = {
        time: e.timeStamp, // convert to string // what format?
        module: e.target.parentElement.childNodes[e.target.parentElement.childNodes.length - 1], // use findId func here
        // parentElementClass: e.srcElement.parentElement.className,
        // parentElementTag: e.srcElement.parentElement.nodeName
        element: `${e.srcElement.parentElement.nodeName}-${e.srcElement.parentElement.className}`
      };
      console.log('this is your click event', body);

      // create axios post to /interactions here
    });

    return (
      <div>
        <h1>Overview</h1>
        <Overview
          id='Overview'
          product_Id={this.state.product_Id}
          handleProductNameChange={this.handleProductNameChange}
        />
        <h1>Related</h1>
        <Related
          id='Related'
          product_Id={this.state.product_Id}
          relatedClickHandler={this.relatedClickHandler}
        />
        <h1>QandA</h1>
        <QandA
          id='QandA'
          product_id={this.state.product_Id}
          product_name={this.state.product_name}
        />
        <h1>Ratings</h1>
        <Ratings
          id='Ratings'
          product_Id={this.state.product_Id}
          productName={this.state.product_name}
        />
      </div>
    );
  }


}

export default App;
