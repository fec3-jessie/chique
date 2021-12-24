import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

let thirtyReviews = new Array(30).fill(<ReviewTile />);

function ReviewsList () {

  return (
    <div className='reviews-list'>
      <h3>This is the reviews list.</h3>
      {thirtyReviews}
    </div>
  )
}


export default ReviewsList;