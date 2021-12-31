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
          <p id = 'product-description'>{this.props.productDescription}</p>
        </div>
      </>
    )
  }
}

export default ProductDescription;


