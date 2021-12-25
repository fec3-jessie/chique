import React from 'react';
import { useState } from 'react';

const starRating = 3.45; // eventaully switch to dynamic
const starPercent = (starRating / 5) * 100;
const roundedPercent = `${(Math.round(starPercent / 10) * 10)}%`;


function StarsTile () {

  return (
    <div className='stars-tile' >
      <div className='stars-outer'>
        <div className='stars-inner' style={{width: roundedPercent}}></div>
      </div>
    </div>
  )
}


export default StarsTile;