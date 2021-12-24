import React from 'react';
import { useState } from 'react';
import StarsTile from './StarsTile.jsx';
import UserTimeTile from './UserTimeTile.jsx';

function ReviewTile () {

  return (
    <div className='review-tile'>
      <h2>this is a single review tile.</h2>
      <div className='header-tile'>
        <StarsTile />
        <UserTimeTile />
      </div>
    </div>
  )
}


export default ReviewTile;