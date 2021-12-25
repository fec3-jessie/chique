import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

let thirtyReviews = new Array(30).fill(<ReviewTile />);


function ReviewsList () {

  return (
    <div className='reviews-list'>
      {thirtyReviews}
    </div>
  )
}


export default ReviewsList;