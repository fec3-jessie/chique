import React from 'react';

const PriceLine = (props) => {

  if (props.salePrice) {
    return (
      <span className='card-price:slashed'>${defaultStyle.original_price}</span>
      <span className='sale-price'>${props.salePrice}</span>
    )
  } else {
    return (
      <span className='card-price'>${defaultStyle.original_price}</span>
    )
  }

}