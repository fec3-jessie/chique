import React from 'react';
import { useState } from 'react';
import StarsTile from './StarsTile.jsx';
import UserTimeTile from './UserTimeTile.jsx';

function ReviewTile () {

  return (
    <div className='review-tile'>
      <h2>this is a single review tile.</h2>
      <StarsTile />
      <UserTimeTile />
    </div>
  )
}


export default ReviewTile;