import React from 'react';
import { useState } from 'react';
import ReviewsList from '../components/RatingsComponents/ReviewsList.jsx';



function Ratings () {

  return (
    <div className='reviews'>
      <h3>{`Ratings & Reviews`}</h3>
      <ReviewsList />
    </div>
  )
}


export default Ratings;