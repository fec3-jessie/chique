import React from 'react';
import axios from 'axios'


class ProductDescription extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {

    return (
      <>
        <div id = 'product-description-container'>
          <h3 id = 'product-slogan'>{this.props.productSlogan}</h3>
          <p id = 'product-description'>{this.props.productDescription}</p>
        </div>
      </>
    )
  }
}

export default ProductDescription;


