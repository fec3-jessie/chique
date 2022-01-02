import React from 'react';

const PriceLine = (props) => {

  if (props.salePrice) {
    return (
      <div>
        <span className='card-price slashed'>${props.originalPrice}</span>
        <span className='sale-price'>${props.salePrice}</span>
      </div>
    )
  } else {
    return (
      <span className='card-price'>${props.originalPrice}</span>
    )
  }
}

export default PriceLine;