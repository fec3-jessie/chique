import React from 'react';
import Overview from './components/Overview.jsx';
import Ratings from './components/Ratings.jsx';
import Related from './components/Related.jsx';
import QandA from './components/QandA.jsx';
import axios from 'axios';

const findId = (element) => {
  let id;
  let moduleIds = {
    'Overview': true,
    'Related': true,
    'QandA': true,
    'Ratings': true,
  };

  const recurseNodeTree = (node) => {
    if (moduleIds[node.id] !== undefined) {
      id = node.id;
      return;
    } else if (node.parentElement) {
      recurseNodeTree(node.parentElement);
    }
  };
  recurseNodeTree(element);
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
      let time = new Date().toLocaleString();
      let body = {
        time: time,
        module: findId(e.target.parentNode),
        element: e.target.outerHTML
      };
      console.log('this is your click event', body);

      // create axios post to /interactions here
    });

    return (
      <div>
        <Overview
          product_Id={this.state.product_Id}
          handleProductNameChange={this.handleProductNameChange}
        />
        <Related
          product_Id={this.state.product_Id}
          relatedClickHandler={this.relatedClickHandler}
        />
        <QandA
          product_id={this.state.product_Id}
          product_name={this.state.product_name}
        />
        <Ratings
          product_Id={this.state.product_Id}
          productName={this.state.product_name}
        />
      </div>
    );
  }


}

export default App;
