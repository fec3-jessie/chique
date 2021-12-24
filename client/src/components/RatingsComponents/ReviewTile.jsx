import React from 'react';
import { useState } from 'react';
import StarsTile from './StarsTile.jsx';
function ReviewTile () {

  return (
    <div className='review-tile'>
      <h2>this is a single review tile.</h2>
      <StarsTile />
    </div>
  )
}


export default ReviewTile;