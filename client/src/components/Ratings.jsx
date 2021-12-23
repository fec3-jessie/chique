import React from 'react';
import { useState } from 'react';
import ReviewsList from '../components/RatingsComponents/ReviewsList.jsx';

function Ratings () {

  return (
    <div className='review-list'>
      <h3>This is the reviews module.</h3>
      <ReviewsList />
    </div>
  )
}


export default Ratings;