import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';

function ReviewsList () {

  return (
    <div className='review-list'>
      <h3>This is the reviews list.</h3>
      <ReviewTile />
    </div>
  )
}


export default ReviewsList;